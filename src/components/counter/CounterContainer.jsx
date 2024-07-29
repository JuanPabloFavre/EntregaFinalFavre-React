import { useState } from "react"
import Counter from "./Counter"

const CounterContainer = ({ onAdd, stock, initial }) => {

    const [contador, setContador] = useState(initial)



    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }

    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }


    return (<Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />

    )

}

export default CounterContainer