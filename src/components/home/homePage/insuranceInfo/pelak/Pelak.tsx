import Typography from "@/components/ui/typography/Typography";
import styles from "./Pelak.module.scss";
import flag from "../../../../../../public/images/flag.png";
import Image from "next/image";
const Pelak = () => {
  return (
    <div className={styles["content"]}>
      <div className={styles["right"]}>
        <Typography variant="title">60</Typography>
      </div>
      <div className={styles["midd"]}>
      <Typography variant="title">650</Typography>
      <Typography variant="title">ک</Typography>
      <Typography variant="title">60</Typography>
      </div>
      <div className={styles["left"]}>
        <Image alt="iran-flag" src={flag} />
        <Typography variant="title">I.R.</Typography>
      </div>
    </div>
  );
};
export default Pelak;
