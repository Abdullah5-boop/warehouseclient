import { useEffect, useState } from "react"

const CustomServiceHook = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch("https://mysterious-savannah-05952.herokuapp.com/Service")
            .then(res => res.json())
            .then(data => setproducts(data))
            .catch(error => { console.log(error) })
    }, [products])
    return [products, setproducts]
}
export default CustomServiceHook;