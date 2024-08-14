
import './login.css'
import { useNavigate } from "react-router-dom";
//import D from './d'
import { useState } from 'react';
import logo from './kfin-bg.png'
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux"
import { login } from "../rSlice/rslice";



// import { Link } from 'react-router-dom';







function Login() {
    const dispatch = useDispatch();
    const userr=useSelector(state=>state.user);
    //let wdata=D;
    // let wdata = [
    //     {
    //         "username": 'bhai',
    //         "password": 'bhai'
    //     }
    // ]
    const [ema,setema]= useState("");
    const [pass,setpass]= useState("");
    

    const navigate = useNavigate()

    
    



    const gotToNewPage = (event) => {
        event.preventDefault();
        
        
    
    //const formm =document.getElementById("formm");
    
    // formm.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     // Your code here
    //   });
       
        let filterD = userr.find(use => use.username === ema && use.password === pass);
        console.log("lad")
        //console.log(userr.username)

        //console.log(filterD);
       // console.log(wdata);
        if(filterD){
            let c=filterD;
            dispatch(login(c));
        
            navigate("/newPage");

        }
        else{
            alert("invalid");
        }
        
        //else
        //alert("invalid");
    }
    const addItem = (event) => {
       // event.preventDefault();
        navigate("/register");
        

        // let c ={
        //     "username": ema,
        //     "password": pass
        // }

        // wdata.push(c);
        // //console.log(filterD);
        // console.log(wdata);

    }

    return (
        <div className='maindiv'>
           

            <form className='form' id='formm'>
            <h1>Login</h1>
                <input type='email' placeholder='Email' className='eml' id='userin' onChange={(e)=>setema(e.target.value)}/>
                <input type='password' placeholder='Password' className='pas' id='userpa' onChange={(e)=>setpass(e.target.value)} />
                <div className='button-cont'>
                    <button onClick={gotToNewPage} type='submit' className='lgb'>Login</button>
                    <button onClick={addItem} id='butt' type='submit' className='rgb'>register</button>

                </div>

            </form>
            <img src={logo} className='kimg' alt='kfin'></img>
        </div>
    )
}

export default Login