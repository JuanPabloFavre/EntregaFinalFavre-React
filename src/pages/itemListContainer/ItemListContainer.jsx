import ItemList from "./ItemList"
import { products } from "../../products"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [error, setError] = useState({})
    const { name } = useParams()


    useEffect(() => {

        const getProducts = new Promise((resolve, reject) => {
            let x = true
            let arrayFilter = products.filter((product) => product.category === name)
            if (x) {
                resolve(name ? arrayFilter : products)
            } else {
                reject({ mesagge: "error", codigo: "404" })
            }
        }, [name])

        getProducts
            .then((res) => {
                setItems(res)
            })
            .catch((error) => {
                setError(error)
            })
    }, [])

    return (

        <div className="d-flex">
            <ItemList items={items} />
        </div>

    )
}

export default ItemListContainer