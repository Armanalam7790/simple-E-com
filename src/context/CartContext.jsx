import { createContext, useState } from "react";

export let CartStore  = createContext()


export let ContextProvider = ({children})=>{
     const [cart, setcart] = useState([])
     let cartlength = cart.length 

     console.log(cart);
     
        return <CartStore.Provider value={{cart, setcart, cartlength}}>
            {children}
        </CartStore.Provider>
}

