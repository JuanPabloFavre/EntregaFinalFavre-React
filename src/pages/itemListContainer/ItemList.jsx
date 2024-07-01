import ProductCard from "../../components/productCard/ProductCard"


const ItemList = ({ items }) => {
    return (

        <div className="d-flex flex-wrap p-3 m-3 justify-content-center " >

            {items.map((item) => {

                return (

                    <ProductCard
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        stock={item.stock}
                        id={item.id}
                    />
                )
            })
            }



        </div>


    )
}

export default ItemList