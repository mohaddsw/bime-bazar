import { FC } from "react";
import styles from "./Header.module.scss";
import Typography from "../typography/Typography";
type Props = {
  title: string;
  hasIcon?: boolean;
};
const Header: FC<Props> = ({ title, hasIcon = false }) => {
  return (
    <div className={styles["header-content"]}>
      {hasIcon && <div className={styles["icon"]}></div>}
      <Typography variant="big-title"> {title}</Typography>
    </div>
  );
};
export default Header;
