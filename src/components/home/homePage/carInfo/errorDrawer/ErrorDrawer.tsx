import Typography from "@/components/ui/typography/Typography"
import styles from "./ErrorDrawer.module.scss"
import Button from "@/components/ui/button/Button"
import { FC } from "react"
type Props={
    retry:()=>void
    back:()=>void
    loading:boolean
}
const ErrorDrawer:FC<Props>=({retry,back,loading})=>{
 return <div className={styles["content"]}>
    <Typography variant="description">
        متاسفانه در ثبت اطلاعات شما خطایی رخ داده است .مجددا تلاش کنید.
    </Typography>
    <div className={styles["actions"]}>
        <Button format="dark" onClick={retry} loading={loading}>تلاش مجدد</Button>
        <Button format="light" onClick={back} loading={loading}>بازگشت</Button>
    </div>
 </div>
}
export default ErrorDrawer