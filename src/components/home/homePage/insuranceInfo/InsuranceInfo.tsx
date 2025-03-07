import Header from "@/components/ui/header/Header"
import styles from "./InsuranceInfo.module.scss"
import Typography from "@/components/ui/typography/Typography"
import Pelak from "./pelak/Pelak"

const InsuranceInfo=()=>{
    return <div className={styles["content"]}>
        <Header title="مشخصات بیمه نامه" hasIcon={true}/>
        <div className={styles["items"]}>
        <Pelak/>
            <div className={styles["item"]}>
                <Typography variant="description" className={styles["color"]}>شرکت بیمه گر</Typography>
                <Typography variant="description">  پارسیان</Typography>
            </div>
            <div className={styles["item"]}>
                <Typography variant="description" className={styles["color"]}>  برند خودرو</Typography>
                <Typography variant="description">  پژو</Typography>
            </div>
            <div className={styles["item"]}>
                <Typography variant="description" className={styles["color"]}>  مدل خودرو</Typography>
                <Typography variant="description">  206 تیپ 6</Typography>
            </div>
           
        </div>
    </div>
}
export default InsuranceInfo