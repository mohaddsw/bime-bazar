import Header from "@/components/ui/header/Header";
import Typography from "@/components/ui/typography/Typography";
import styles from "./CarInfo.module.scss";
import TextField from "@/components/ui/textField/TextField";
import Button from "@/components/ui/button/Button";

const CarInfo = () => {
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
          <Button format="primary">انتخاب از آدرس های من</Button>
        </div>
        <div className={styles["action-div"]}>
          <Button format="dark" disabled className={styles["action-btn"]}>
            تایید و ادامه
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CarInfo;
