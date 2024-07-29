import ProductCard from "../../components/productCard/ProductCard"
import { usePaginate } from "../../hooks/usePaginate"
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";



const ItemList = ({ items }) => {

    const { currentData, nextPage, prevPage, totalPages, currentPage } = usePaginate(items, 8)
    return (
        <div className="d-flex flex-column">

            <div className="d-flex flex-wrap p-3 m-3 justify-content-center " >

                {currentData.map((item) => {

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
            <div>

            </div>
            <div className="d-flex justify-content-center align-items">
                <div>
                    <button className="btn btn-dark p-2 m-2 " onClick={prevPage} disabled={currentPage === 1}>{<RxTrackPrevious />}</button>
                </div>
                <div>
                    <h4>{currentPage}/{totalPages}</h4>
                </div>
                <div>
                    <button className="btn btn-primary p-2 m-2" onClick={nextPage} disabled={totalPages === currentPage}>{<RxTrackNext />}</button>
                </div>
            </div>
        </div>
    )
}

export default ItemList