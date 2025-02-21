
import { Suspense,lazy } from "react"
const LazyComp=lazy( ()=>import ('../SignUp.jsx'))
const LazyLoadingAndSuspense=()=>{
return(
    <div>
        <Suspense fallback={<h1>Loading.....</h1>}>
        <h1>This is LazyComponent</h1>
        </Suspense>
    </div>
)
}
export default LazyLoadingAndSuspense