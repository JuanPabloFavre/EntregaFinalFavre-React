import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PuffLoader } from "react-spinners"

import { db } from "../../firebaseConfig"
import { getDocs, collection, query, where, addDoc } from "firebase/firestore"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [error, setError] = useState({})
    const { name } = useParams()

    useEffect(() => {

        let productsCollection = collection(db, "products")

        let consulta = productsCollection
        if (name) {
            consulta = query(productsCollection, where("category", "==", name))
        }

        let getProducts = getDocs(consulta)

        getProducts.then((res) => {

            let arrayValido = res.docs.map((products) => {

                return { ...products.data(), id: products.id }

            })
            setItems(arrayValido)
        })

    }, [name])


    /*     useEffect(() => {
    
            const getProducts = new Promise((resolve, reject) => {
                let allProds = true
                let arrayFilter = products.filter((product) => product.category === name)
    
                if (allProds) {
                    setTimeout(() => {
                        resolve(name ? arrayFilter : products)
                    }, 3000);
                } else {
                    reject({ mesagge: "error", codigo: "404" })
                }
            },)
    
            getProducts
                .then((res) => {
                    setItems(res)
                })
                .catch((error) => {
                    setError(error)
                })
        }, [name]) */

    if (items.length === 0) {
        return <div className='d-flex justify-content-center align-self-center' style={{ width: "100%", height: "70vh", background: "white" }}>
            <span className="fs-1 d-flex justify-content-center align-self-center"><PuffLoader color="red" /></span>
        </div>
    }

    /*    const addProducts = () => {
           let productsCollection = collection(db, "products")
   
           products.forEach((elemento) => {
               addDoc(productsCollection, elemento)
           })
       } */
    return (

        <div className="d-flex">
            {/*    <button className="btn btn-danger" onClick={addProducts}>Agregar Productos</button> */}
            <ItemList items={items} />
        </div>

    )
}

export default ItemListContainer