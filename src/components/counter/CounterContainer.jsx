import { useState } from "react"
import Counter from "./Counter"

const CounterContainer = () => {

    const [contador, setContador] = useState(1)

    let maximo = 10

    const sumar = () => {
        if (contador < maximo) {
            setContador(contador + 1)
        }

    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }


    return (<Counter contador={contador} sumar={sumar} restar={restar} />

    )

}

export default CounterContainer