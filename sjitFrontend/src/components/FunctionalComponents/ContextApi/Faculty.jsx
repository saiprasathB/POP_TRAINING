import CoE from "./CoE"

const Faculty=(res)=>{
    return (
        <div>
            <h1>
                {res.msg}
            </h1>
            <h1>Faculty is Corecting the paper</h1>
            <CoE msg="Handed the Paper" cgpa="10" sgpa="10"></CoE>
        </div>
    )
}
export default Faculty