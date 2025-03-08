import styles from "./Success.module.scss";
import successImage from "../../../../public/images/validation_form 1.png";
import Image from "next/image";
import Typography from "@/components/ui/typography/Typography";
import Pelak from "../homePage/insuranceInfo/pelak/Pelak";
import Header from "@/components/ui/header/Header";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/router";

const Success = () => {
    const {push}=useRouter()
  return (
    <div className={styles["content"]}>
      <Header title="مشخصات بیمه نامه" hasIcon={true} />
      <div className={styles["success-content"]}>
        <Image alt="success-image" src={successImage} />
        <div>
          <Typography variant="title">ثبت اطلاعات شما با </Typography>
          <Typography variant="title" className={styles["success-text"]}>
            {" "}
            موفقیت{" "}
          </Typography>
          <Typography variant="title"> انجام شد. </Typography>
        </div>
        <div className={styles["items"]}>
          <Pelak />
          <div className={styles["item"]}>
            <Typography variant="description" className={styles["color"]}>
              شرکت بیمه گر
            </Typography>
            <Typography variant="description"> پارسیان</Typography>
          </div>
          <div className={styles["item"]}>
            <Typography variant="description" className={styles["color"]}>
              {" "}
              برند خودرو
            </Typography>
            <Typography variant="description"> پژو</Typography>
          </div>
          <div className={styles["item"]}>
            <Typography variant="description" className={styles["color"]}>
              {" "}
              مدل خودرو
            </Typography>
            <Typography variant="description"> 206 تیپ 6</Typography>
          </div>
        </div>
        <div className={styles["actions-sec"]}>
        <Button format="dark" className={styles["actions-btn"]} onClick={()=>push("/")}>بازگشت</Button>
      </div>
      </div>
   
    </div>
  );
};
export default Success;
