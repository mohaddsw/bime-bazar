import Typography from "@/components/ui/typography/Typography"
import styles from "./AddressDrawer.module.scss"
const AddressDrawer=()=>{
    return <div className={styles["content"]}>
        <div className={styles["header"]}>
            <Typography variant="title">انتخاب آدرس</Typography>
        </div>
    </div>
}
export default AddressDrawer