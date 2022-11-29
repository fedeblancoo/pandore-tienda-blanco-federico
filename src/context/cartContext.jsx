import { createContext , useState} from "react";

export const cartContext = createContext();

function CartContextProvider (props) {
    const [cart, setCart] = useState([]);

    function addToCart (product, count) {
        let cartItemCheck = cart.findIndex((e) => e.id === product.id);
        let newCart = [ ...cart];

        if (cartItemCheck !== -1){
            newCart[cartItemCheck].count += count;
            setCart(newCart);
            
        } else {
            product.count = count;
            newCart.push(product)
            setCart(newCart);
        }

        
    }

    function itemsInCart () {
        let totalItems= 0;
        cart.forEach((e) => totalItems= totalItems + e.count)
        return totalItems
    }

    
    const value = {
        cart,
        addToCart,
        itemsInCart
    }

    return (
        <cartContext.Provider value={value}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartContextProvider