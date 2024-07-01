import CounterContainer from "../../components/counter/CounterContainer"


const ItemDetail = ({ item }) => {
    return (
        <div className="d-flex justify-content-center m-5 ">

            <div className="card p-5 m-3 border border-5 " style={{ width: "40rem" }}>
                <img className="card-img-top " src={item.img} alt="..."></img>
                <div className="card-body text-center">
                    <h5 className="card-title fs-3 text ">{item.title}</h5>
                    <h2 className=" text-light text-md-center">Detalles</h2>
                    <h4>Detalle: </h4>
                    <h5 className="card p-5 m-3" >{item.detail}</h5>
                    <p className="card-tex fs-3 text text-danger">Precio:  ${item.price}</p>
                    <p className="card-text fs-3 text">Stock:  {item.stock}</p>
                    <a className="btn btn-success btn-lg">Agregar al Carrito</a>
                </div>
                <CounterContainer />
            </div>


        </div>
    )
}

export default ItemDetail
