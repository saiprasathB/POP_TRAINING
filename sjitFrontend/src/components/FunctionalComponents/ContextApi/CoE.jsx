import Studentresult from "./Studentresult";

const CoE=(res)=>{
    return(
        <div>
            <h1>{res.msg}</h1>
            <Studentresult  cgpa={res.cgpa} sgpa ={res.sgpa}></Studentresult>
        </div>
    )
}
export default CoE;
