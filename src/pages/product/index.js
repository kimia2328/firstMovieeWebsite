import {useState, useEffect} from "react";
import { useParams} from "react-router-dom";

function Product() {
    const [productId, setProductId] = useState();
    const {id} = useParams();

    useEffect(() =>{
        setProductId(id);
    }, [id])
    return(
        <p>products{productId}</p>
    );
}

export default Product;