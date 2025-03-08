import TextField from "@/components/ui/textField/TextField";
import { verifyIranianNationalId } from "@/helper/handleVerifyNationalId";
import { FC } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FormData } from "../CarInfo";

type Props={
    control:Control<FormData>,
    errors:FieldErrors<FormData>
}

const NationalId:FC<Props> = ({ control, errors }) => {
  return (
    <Controller
      control={control}
      rules={{
        required: "لطفا کد ملی را وارد کنید",
        validate: (value) => {
          return (
            verifyIranianNationalId(value as number) || "کدملی وارد شده معتبر نیست."
          );
        },
        pattern: {
          value: /^[\d۰-۹]*$/,
          message: "لطفاً فقط از اعداد استفاده کنید",
        },
        minLength: {
          value: 10,
          message: "کد ملی نا معتبر است.",
        },
        maxLength: {
          value: 10,
          message: "کد ملی نا معتبر است.",
        },
      }}
      name="nationalCode"
      render={({ field: { value, onChange, ...props } }) => {
        return (
          <TextField
            label="کد ملی"
            type="number"
            value={value as number}
            onChange={onChange}
            {...props}
            error={!!errors.nationalCode}
            description={errors.nationalCode?.message}
          />
        );
      }}
    />
  );
};
export default NationalId;
