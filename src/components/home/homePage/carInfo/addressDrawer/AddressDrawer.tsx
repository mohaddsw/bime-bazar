import Typography from "@/components/ui/typography/Typography";
import styles from "./AddressDrawer.module.scss";
import close from "../../../../../../public/images/close 3.png";
import Image from "next/image";
import { FC, useState } from "react";
import RadioButton from "@/components/ui/radioButton/RadioButton";
import Button from "@/components/ui/button/Button";

type Address = {
  details: string;
  id: string;
  name: string;
};
type Props = {
  handleClose: (value:string) => void;
  address: Address[];
};


const AddressDrawer: FC<Props> = ({ handleClose, address }) => {
    const [value,setValue]=useState("")
  
  return (
    <div className={styles["content"]}>
      <div className={styles["header"]}>
        <Typography variant="title">انتخاب آدرس</Typography>
        <Image
          alt="close"
          src={close}
          className={styles["close"]}
          onClick={()=>handleClose("")}
        />
      </div>
      <div className={styles["main"]}>
        {address?.map((item, index) => {
          return (
            <div
              key={`ADDRESS_ITEM_${index}`}
              className={styles["address-item"]}
            >
              <div className={styles["item-flex"]}>
                <div className={styles["item-radio"]}>
                  <RadioButton value={item.id} onChange={e =>setValue(e.target.value)}  checked={value === item.id} />
                  <Typography variant="title">{item.name}</Typography>
                </div>
              </div>
              <Typography variant="description" className={styles["description"]}>{item.details}</Typography>
            </div>
          );
        })}
        <Button format="dark" disabled={!value} onClick={()=>handleClose(value)}>انتخاب</Button>
      </div>
    </div>
  );
};
export default AddressDrawer;
