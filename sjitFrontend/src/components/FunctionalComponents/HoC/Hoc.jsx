import Button from "./Button";
import TrackingMyButtonComp from "./TrackingMyButtonComp";
const HoC=()=>{
    const ButtonTrack=TrackingMyButtonComp(Button)
     return(
        <div>
            <h1>Welcome To Higher order Components(HoC)</h1>
            {/* <Button value={"Login"}></Button> */}
            <ButtonTrack value={"Login"} TrackingInfo={{CustId :"Hello"}} ></ButtonTrack>
        </div>
     )
}
export default HoC;