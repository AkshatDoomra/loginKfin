import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:[],
    log:null
    

};

export const userRed =createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            // console.log(state.user);
            // console.log("bhai");
           
            // state.user = produce(state.user, draft => {
            //     draft.push(action.payload);
            //   });
              //state.user = draft => [...draft, action.payload];
              //console.log(Array.isArray(state.user));
            //console.log(state.user);
            // let k=action.payload.name;
            // let m =action.payload.username;
            // let s = action.payload.password
            state.log = action.payload;
            // console.log(typeof(state.user))
            // state.user = [...state.user, action.payload];
            // console.log("bhai");
            // console.log(state.user)

            
            

        },
        register:(state,action)=>{
            // console.log(Array.isArray(state.user));
            // console.log(typeof(state.user))
            //state.log = action.payload;
            console.log(typeof(state.user))
            state.user = [...state.user, action.payload];
            console.log("bhai");
            console.log(state.user)
            // console.log("bhai");
            // console.log(state.user)

        }

    }

});

export const {login,register} = userRed.actions;
export default userRed.reducer;
