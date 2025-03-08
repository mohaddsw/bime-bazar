import Header from "@/components/ui/header/Header";
import Typography from "@/components/ui/typography/Typography";
import styles from "./CarInfo.module.scss";
import Button from "@/components/ui/button/Button";
import useDrawer from "@/hooks/useDrawer";
import Drawer from "@/components/ui/drawer/Drawer";
import { useEffect, useState } from "react";
import axios from "@/services/axios";
import AddressDrawer from "./addressDrawer/AddressDrawer";
import { useForm } from "react-hook-form";
import NationalId from "./nationalId/NationalId";
import Tell from "./tell/Tell";
import ErrorDrawer from "./errorDrawer/ErrorDrawer";
import { useRouter } from "next/router";
import Address from "./address/Address";
import DeletDrawer from "./deleteDrawer/DeleteDrawer";
export type Address = {
  details: string;
  id: string;
  name: string;
};
export type FormData = {
  nationalCode: number | string;
  tell: number | string;
  address: Address | object;
};
const CarInfo = () => {
  const { drawerClose, drawerOpen, isDrawerOpen } = useDrawer();
  const [address, setAddress] = useState<Address[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("default");
  const [deletedVal, setDeletedVal] = useState<Address | object>({});
  const router = useRouter();
  const { handleSubmit, control, formState, setValue, watch } =
    useForm<FormData>({
      defaultValues: {
        nationalCode: "",
        tell: "",
        address: {},
      },
    });
  const onsubmit = (formData: FormData) => {
    setLoading(true);

    axios
      .post("/order/completion/", {
        nationalId: formData.nationalCode,
        phoneNumber: formData.tell,
        addressId: (formData.address as Address)?.id,
      })
      .then(() => {
        router.push("/success");
        setLoading(false);
      })
      .catch(() => {
        drawerOpen("DRAWER");
        setStatus("error");
        setLoading(false);
      });
  };
  useEffect(() => {
    axios.get("/my-addresses/").then((res) => setAddress(res?.data));
  }, []);
  const handleSelect = (value: string) => {
   
    const addressValue = address.find((item) => item.id === value);
    setValue("address", addressValue ?? {});
  };
  const handleDeletedItem=(val:string)=>{
    const addressValue = address.find((item) => item.id === val);
    setDeletedVal(addressValue ?? {})
  }
  const handleDeletedAddress=()=>{
    const newAddress: Address[]=[]
    address.forEach((item)=>{
    if(item.id!==(deletedVal as Address).id){
      newAddress.push(item)
    }
    })
    setAddress(newAddress)
    setStatus("default")
    drawerClose()
  }
  const nationalCode = watch("nationalCode");
  const tell = watch("tell");
  const addressField = watch("address");

  const isAllFilled = nationalCode && tell && (addressField as Address)?.id;
  return (
    <div>
      <Header title="  مشخصات مالک خودرو" hasIcon={true} />
      <div className={styles["content"]}>
        <Typography variant="title">
          لطفا اطلاعات شخصی مالک خودرو را وارد کنید.
        </Typography>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className={styles["form-content"]}
        >
          <NationalId control={control} errors={formState.errors} />
          <Tell control={control} errors={formState.errors} />
          <Address
            control={control}
            handleOpenDrawer={() => drawerOpen("DRAWER")}
          />
        </form>
        <div className={styles["action-div"]}>
          <Button
            loading={loading}
            format="dark"
            disabled={!isAllFilled}
            className={styles["action-btn"]}
            type="submit"
            onClick={handleSubmit(onsubmit)}
          >
            تایید و ادامه
          </Button>
        </div>
      </div>
      <Drawer
        onClose={drawerClose}
        open={isDrawerOpen("DRAWER")}
        maxWidth="360px"
        className={styles["drawer"]}
      >
        {status === "default" && (
          <AddressDrawer
            handleClose={(val) =>{
              handleSelect(val)
              drawerClose()
            } }
            address={address}
            handleDelete={(val)=>{
              setStatus("delete")
              drawerOpen("DRAWER")
              handleDeletedItem(val)
            }}
          />
        )}
        {status === "error" && (
          <ErrorDrawer
            retry={handleSubmit(onsubmit)}
            back={drawerClose}
            loading={loading}
          />
        )}
        {status === "delete" && (
          <DeletDrawer
            back={()=>{
              drawerClose()
              setStatus("default")
            }}
            handleClose={()=>{
              drawerClose()
              setStatus("default")
              setDeletedVal({})
            }}
            item={deletedVal as Address}
            handleSuccess={()=>handleDeletedAddress() }
           
          />
        )}
      </Drawer>
    </div>
  );
};
export default CarInfo;
