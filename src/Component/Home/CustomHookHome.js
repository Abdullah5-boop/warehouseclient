import { useEffect, useState } from "react"

const CustomHookHome = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch("https://mysterious-savannah-05952.herokuapp.com/Service")
            .then(res => res.json())
            .then(data => setproducts(data))
            .catch(error => { console.log(error) })
    }, [])
    return [products, setproducts]
}
export default CustomHookHome;