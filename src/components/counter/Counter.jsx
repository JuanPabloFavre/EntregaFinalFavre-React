
const Counter = ({ contador, sumar, restar, onAdd }) => {


    return (

        <div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-info m-2" onClick={sumar}> + </button>
                <div className="d-flex justify-content-center m-2">
                    <h2 className="fs-2 text ">{contador}</h2>
                </div>
                <button className="btn btn-danger m-2" onClick={restar}> - </button>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-success btn-lg" onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </div >




        </div >
    )
}

export default Counter