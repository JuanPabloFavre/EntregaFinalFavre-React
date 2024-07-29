import './ProductCard.css'
import { Link } from "react-router-dom"


const ProductCard = ({ title, price, img, stock, id }) => {
    // Determina si el stock es 0
    const isOutOfStock = stock === 0;

    return (
        <div>
            <div className="card p-5 m-3 border border-5" style={{ width: "24rem" }}>
                <img className="card-img-top" src={img} alt={title} />
                <div className="card-body text-center">
                    <h5 className="card-title fs-3 text">{title}</h5>
                    <p className="card-tex fs-3 text text-danger">Precio: ${price}</p>
                    <p className="card-text fs-3 text">Stock: {stock}</p>
                    <Link
                        to={`/ItemDetail/${id}`}
                        className={`btn btn-success btn-lg ${isOutOfStock ? 'disabled' : ''}`}
                        aria-disabled={isOutOfStock}
                        style={{ pointerEvents: isOutOfStock ? 'none' : 'auto' }}
                    >
                        {isOutOfStock ? 'Sin stock' : 'Ver más'}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;