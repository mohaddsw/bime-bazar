import Header from "@/components/ui/header/Header";
import Typography from "@/components/ui/typography/Typography";
import styles from "./CarInfo.module.scss";
import TextField from "@/components/ui/textField/TextField";
import Button from "@/components/ui/button/Button";
import useDrawer from "@/hooks/useDrawer";
import Drawer from "@/components/ui/drawer/Drawer";
import { useEffect } from "react";
import axios from "@/services/axios";
import AddressDrawer from "./addressDrawer/AddressDrawer";

const CarInfo = () => {
  const { drawerClose, drawerOpen, isDrawerOpen } = useDrawer();
  useEffect(() => {
      axios.get("/my-addresses/").then((res) => console.log(res));
    
  }, []);
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
          <Typography variant="description">
            لطفا آدرسی را که میخواهید روی بیمه نامه درج شود را وارد کنید.
          </Typography>
          <Button format="primary" onClick={() => drawerOpen("ADDRESS")}>
            انتخاب از آدرس های من
          </Button>
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
        <AddressDrawer/>
      </Drawer>
    </div>
  );
};
export default CarInfo;
