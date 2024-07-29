import { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2"
import { db } from "../../firebaseConfig"
import { collection, doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {


    const { addCart, getQuantity } = useContext(CartContext)
    const { id } = useParams()
    const [item, setItem] = useState({})


    let initial = getQuantity(+id)


    useEffect(() => {

        let productsCollection = collection(db, "products")
        let refDoc = doc(productsCollection, id)
        let getProducts = getDoc(refDoc)
        getProducts.then((res) => setItem({ ...res.data(), id: res.id }))
    }, [id])

    /*   useEffect(() => {
  
          let product = products.find((product) => product.id === +id)
  
          if (product) {
              setItem(product)
          }
  
      }, [id]) */


    const onAdd = (quantity) => {

        let objfinal = { ...item, quantity: quantity }
        addCart(objfinal)
        Swal.fire({
            icon: "success",
            title: "Agregado al carrito",
            showConfirmButton: false,
            timer: 1500
        })
    }


    return (

        <div >
            <ItemDetail item={item} onAdd={onAdd} initial={initial} />
        </div >
    )
}

export default ItemDetailContainer