
import { useSelector } from "react-redux"
function NewPage() {
     const userr=useSelector(state=>state.log);
    // console.log(userr);
    //let len= userr.length;
    console.log(userr);
    return(
        <>
        
        <h1>welcome {userr.name}</h1>
        </>
    )
}
export default NewPage