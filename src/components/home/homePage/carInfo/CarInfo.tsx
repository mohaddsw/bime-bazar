import Header from "@/components/ui/header/Header";
import Typography from "@/components/ui/typography/Typography";
import styles from "./CarInfo.module.scss";
import Button from "@/components/ui/button/Button";
import useDrawer from "@/hooks/useDrawer";
import Drawer from "@/components/ui/drawer/Drawer";
import { useEffect, useState } from "react";
import axios from "@/services/axios";
import AddressDrawer from "./addressDrawer/AddressDrawer";
import { Controller, useForm } from "react-hook-form";
import NationalId from "./nationalId/NationalId";
import Tell from "./tell/Tell";
type Address = {
  details: string;
  id: string;
  name: string;
};
export type FormData = {
  nationalCode: number | string;
  tell: number | string;
  address: string;
};
const CarInfo = () => {
  const { drawerClose, drawerOpen, isDrawerOpen } = useDrawer();
  const [address, setAddress] = useState<Address[] | []>([]);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control, formState,setValue,watch } = useForm<FormData>({
    defaultValues: {
      nationalCode: "",
      tell: "",
      address: "",
    },
  });
  const onsubmit = (formData: FormData) => {
    setLoading(true)
    console.log(formData);
  };
  useEffect(() => {
    axios.get("/my-addresses/").then((res) => setAddress(res?.data));
  }, []);
  const handleSelectAndClose = (value: string) => {
    drawerClose();
    const addressValue = address.find((item) => item.id === value);
    setValue("address",addressValue?.details ?? "")
  };
  const nationalCode = watch("nationalCode");
const tell = watch("tell");
const addressField = watch("address");

const isAllFilled = nationalCode && tell && addressField;
  return (
    <div>
      <Header title="  مشخصات مالک خودرو" hasIcon={true} />
      <div className={styles["content"]}>
        <Typography variant="title">
          لطفا اطلاعات شخصی مالک خودرو را وارد کنید.
        </Typography>
        <form onSubmit={handleSubmit(onsubmit)} className={styles["form-content"]}>
       <NationalId control={control} errors={formState.errors}/>
       <Tell control={control} errors={formState.errors}/>
          <Controller
            control={control}
            rules={{
              required: "این فیلد ضروری میباشد.",
            }}
            name="address"
            render={({ field: { value } }) => {
              return (
                <div className={styles["address"]}>
                  <Typography variant="title">
                    {" "}
                    آدرس جهت درج روی بیمه نامه
                  </Typography>
                  {value === "" ? (
                    <>
                      <Typography variant="description">
                        لطفا آدرسی را که میخواهید روی بیمه نامه درج شود را وارد
                        کنید.
                      </Typography>
                      <Button
                        format="primary"
                        onClick={() => drawerOpen("ADDRESS")}
                      >
                        انتخاب از آدرس های من
                      </Button>
                    </>
                  ) : (
                    <Typography variant="description">{value}</Typography>
                  )}
                </div>
              );
            }}
          />
        </form>
        <div className={styles["action-div"]}>
          <Button loading={loading} format="dark" disabled={!isAllFilled} className={styles["action-btn"]} type="submit" onClick={handleSubmit(onsubmit)}>
            تایید و ادامه
          </Button>
        </div>
      </div>
      <Drawer
        onClose={drawerClose}
        open={isDrawerOpen("ADDRESS")}
        maxWidth="360px"
        className={styles["drawer"]}
      >
        <AddressDrawer
          handleClose={(val) => handleSelectAndClose(val)}
          address={address}
        />
      </Drawer>
    </div>
  );
};
export default CarInfo;
