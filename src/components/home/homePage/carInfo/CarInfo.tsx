import Header from "@/components/ui/header/Header";
import Typography from "@/components/ui/typography/Typography";
import styles from "./CarInfo.module.scss";
import TextField from "@/components/ui/textField/TextField";
import Button from "@/components/ui/button/Button";
import useDrawer from "@/hooks/useDrawer";
import Drawer from "@/components/ui/drawer/Drawer";
import { useEffect, useState } from "react";
import axios from "@/services/axios";
import AddressDrawer from "./addressDrawer/AddressDrawer";
type Address = {
  details: string;
  id: string;
  name: string;
};
const CarInfo = () => {
  const { drawerClose, drawerOpen, isDrawerOpen } = useDrawer();
  const[address,setAddress]=useState<Address[]|[]>([])
  const[addressVal,setAddressVal]=useState("")
  useEffect(() => {
      axios.get("/my-addresses/").then((res) => setAddress(res?.data));
    
  }, []);
  const handleSelectAndClose=(value:string)=>{
    drawerClose()
    const addressValue=address.find(item=>(item.id===value))
    console.log(addressValue)
    setAddressVal(addressValue?.details??"")
}
  return (
    <div>
      <Header title="  مشخصات مالک خودرو" hasIcon={true} />
      <div className={styles["content"]}>
        <Typography variant="title">
          لطفا اطلاعات شخصی مالک خودرو را وارد کنید.
        </Typography>
        <TextField label="کد ملی" />
        <TextField label="شماره تلفن همراه " />
        <div className={styles["address"]}>
          <Typography variant="title"> آدرس جهت درج روی بیمه نامه</Typography>
          {addressVal===""?<><Typography variant="description">
            لطفا آدرسی را که میخواهید روی بیمه نامه درج شود را وارد کنید.
          </Typography>
          <Button format="primary" onClick={() => drawerOpen("ADDRESS")}>
            انتخاب از آدرس های من
          </Button></>:
          <Typography variant="description">{addressVal}</Typography>
          }
        </div>
        <div className={styles["action-div"]}>
          <Button format="dark" disabled className={styles["action-btn"]}>
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
        <AddressDrawer handleClose={(val)=>handleSelectAndClose(val)} address={address}/>
      </Drawer>
    </div>
  );
};
export default CarInfo;
