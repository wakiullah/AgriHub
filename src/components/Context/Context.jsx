/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import React, { createContext } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const ShopContext = createContext(null)

const getFetchData = async () => {
    let ab = []
    const docs = query(collection(db, 'products'))
    const docRef = await getDocs(docs)
    docRef.forEach((doc) => {
        // setProductsList(...productsList, doc.data())
        ab.push(doc.data())
    })
    // console.log(ab);

    return ab;
}



const getDefaultCartDeta = () => {
    const all_product = getFetchData().then((item) => item)

    let cart = {};

    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const all_product = getFetchData().then((item) => item)
    const [cartItems, setCartItems] = useState(getDefaultCartDeta())
    const [allData, setAllData] = useState([])
    const [user, setUser] = useState()
    const [productsList, setProductsList] = useState([])

    const loginContext = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        console.log('done');
    }

    const logOutContext = () => {
        signOut(auth)
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        console.log(itemId);
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getProductData = (data) => {
        console.log(data);
        setAllData(data)
    }

    const getTotalItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }

    const getTotalCartAmmount = () => {
        let totalAmmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmmount
    }

    const getProductsData = async () => {
        let ab = []
        const docs = query(collection(db, 'products'))
        const docRef = await getDocs(docs)
        docRef.forEach((doc) => {
            // setProductsList(...productsList, doc.data())
            ab.push(doc.data())
        })
        setProductsList(ab)
    }
    useEffect(() => {
        getProductsData()

    }, [])

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (cuser) => {
            setUser(cuser)
        })

        return unsubscriber
    }, [])


    const contextValue = { getTotalCartAmmount, productsList, logOutContext, user, loginContext, allData, getProductData, getTotalItem, all_product, cartItems, addToCart, removeFromCart }
    // console.log(cartItems);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider