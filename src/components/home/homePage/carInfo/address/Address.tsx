import { Control, Controller } from "react-hook-form";
import { Address as AddressType, FormData } from "../CarInfo";
import { FC } from "react";
import Typography from "@/components/ui/typography/Typography";
import Button from "@/components/ui/button/Button";
import styles from "./Address.module.scss"
type Props={
    control:Control<FormData>,
    handleOpenDrawer:()=>void
}

const Address:FC<Props>=({control,handleOpenDrawer})=>{
    return  <Controller
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
          {!Object.values(value).length ? (
            <>
              <Typography variant="description">
                لطفا آدرسی را که میخواهید روی بیمه نامه درج شود را وارد
                کنید.
              </Typography>
              <Button
                format="primary"
                onClick={handleOpenDrawer}
              >
                انتخاب از آدرس های من
              </Button>
            </>
          ) : (
            <Typography variant="description">
              {(value as AddressType)?.details}
            </Typography>
          )}
        </div>
      );
    }}
  />
}
export default Address