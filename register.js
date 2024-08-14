import { useState } from "react";
//import D from './d'
import './register.css';
import { useDispatch } from "react-redux";
import { login,register } from "../rSlice/rslice";
function Register() {
    const [ema, setema] = useState("");
    const [pass, setpass] = useState("");
    const [name,setname]= useState("")
    
    const dispatch = useDispatch();
    const addItem = (event) => {
        event.preventDefault();
       // let wdata=D;
        
        

        let c ={
            "name":name,
            "username": ema,
            "password": pass
        }
        dispatch(register(c));

        //wdata.push(c);
        //console.log(filterD);
        //console.log(wdata);

    }
    return (
        


        <div className="reg">

            
            <form className='form' id='formm'>
            <h1>Register</h1>
                
            <input type='name' placeholder='Name' className='nam' id='namId' onChange={(e) => setname(e.target.value)} />

                <input type='email' placeholder='Email' className='eml' id='userin' onChange={(e) => setema(e.target.value)} />
                <input type='password' placeholder='Password' className='pas' id='userpa' onChange={(e) => setpass(e.target.value)} />
                <div className='button-cont'>
                    
                    <button onClick={addItem} id='butt' type='submit'>register</button>

                </div>

            </form>
        </div>

    );
}
export default Register