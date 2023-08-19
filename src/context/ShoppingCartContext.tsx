import {createContext, ReactNode, useContext} from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

const ShoppingCartContext = createContext({})

export const useShoppingCart = () => { //Custom hook
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) { // provide portion : provider gives all the values and houses the code for rendering the shopping cart when we click the shopping cart button
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )

}