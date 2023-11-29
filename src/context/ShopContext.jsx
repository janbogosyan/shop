import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product.js';



export const ShopContext = createContext(null);
//  console.log(ShopContext)

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1 ; index++) {
        cart[index] = 0;      //{0: 0, 1: 0, 2: 0, 3: 0} и така нататъка, cart e просто празен обект в който слагаме ключове и стойности
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setcartItems] = useState(getDefaultCart());  //it size will be all_product.length + 1

    console.log(cartItems); //can check in developer tool in browser f12

    const addToCart = (itemId) => {
        setcartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        // console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setcartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;               //използваме let защото ще се променя цената
        for (const item in cartItems) {    //"for in" statement loops through the properties of an Object:
            if (cartItems[item] > 0) {   
                let itemInfo = all_product.find(product => product.id === Number(item)) //бъркаме в all_product масива от дрехи ай-дито да е равно на item(айтъм е пропъртито в обекта,защото сме използвали "for in loop")
                totalAmount += itemInfo.new_price * cartItems[item];   //itemInfo.new_price имаме в all_product масива пропърти което се казва new_price //cartItems[item] това ще е примерно че в количката сме закупили 1 тениска
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () => {  //това е ясно
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount,getTotalCartItems }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

