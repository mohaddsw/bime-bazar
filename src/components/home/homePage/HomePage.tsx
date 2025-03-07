import CarInfo from "./carInfo/CarInfo"
import styles from "./HomePage.module.scss"
import InsuranceInfo from "./insuranceInfo/InsuranceInfo"

const HomePage=()=>{
    return <div className={styles["content"]}>
        <InsuranceInfo/>
        <CarInfo/>
        
        </div>
}
export default HomePage