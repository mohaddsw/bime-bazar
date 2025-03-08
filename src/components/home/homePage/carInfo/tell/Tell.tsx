import TextField from "@/components/ui/textField/TextField";
import { FC } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Regexes } from "@/helper/regexes";
import { FormData } from "../CarInfo";

type Props={
    control:Control<FormData>,
    errors:FieldErrors<FormData>
}

const Tell:FC<Props> = ({ control, errors }) => {
  return (
    <Controller
    control={control}
    rules={{
      required: "این فیلد ضروری میباشد.",
      minLength: {
        value: 11,
        message: "تعداد کاراکتر مجاز 11 می‌باشد",
      },
      maxLength: {
        value: 11,
        message: "حداکثر تعداد کاراکتر مجاز 11 می‌باشد",
      },
      pattern: {
        value: Regexes.PHONE_NUMBER,
        message: "شماره تلفن همراه معتبر نیست.",
      },
    }}
    name="tell"
    render={({ field: { value, onChange, ...props } }) => {
      return (
        <TextField
          label="شماره تلفن همراه "
          type="tel"
          value={value as number}
          onChange={onChange}
          {...props}
          error={!!errors.tell}
          description={errors.tell?.message}
        />
      );
    }}
  />
  );
};
export default Tell;
