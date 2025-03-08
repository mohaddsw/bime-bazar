import { FC } from "react";
import styles from "./DeleteDrawer.module.scss";
import Typography from "@/components/ui/typography/Typography";
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import close from "../../../../../../public/images/close 3.png";
import { Address } from "../CarInfo";

type Props = {
  back: () => void;
  handleClose: (value: string) => void;
  item:Address
  handleSuccess:()=>void
};
const DeletDrawer: FC<Props> = ({ back, handleClose ,item,handleSuccess}) => {
  return (
    <div className={styles["content"]}>
      <div className={styles["header"]}>
        <Typography variant="title">انتخاب آدرس</Typography>
        <Image
          alt="close"
          src={close}
          className={styles["close"]}
          onClick={() => handleClose("")}
        />
      </div>
      <div className={styles["main"]}>
        <Typography variant="description">
            آیا از حذف آدرس خود مطمئن هستید؟

        </Typography>
        <div className={styles["deleted-item"]}>
            <Typography variant="title">{item.name}</Typography>
            <Typography variant="description" className={styles["description"]}>{item.details}</Typography>
        </div>
        <div className={styles["actions"]}>
          <Button format="dark" onClick={handleSuccess}>
             تایید
          </Button>
          <Button format="light" onClick={back}>
            بازگشت
          </Button>
        </div>
      </div>
    </div>
  );
};
export default DeletDrawer;
