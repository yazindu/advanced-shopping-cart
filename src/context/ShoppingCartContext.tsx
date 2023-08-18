import {createContext, useContext} from "react";

const ShoppingCartContext = createContext({})

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

