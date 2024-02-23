import { useState } from "react";
import arrayProductos from "./json/productos.json"
import { useEffect } from "react";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import Loading from "./Loading";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    //Llamada a productos desde el archivo JSON
/*        useEffect(() => {
            const promesa = new Promise(resolve => {
                setTimeout(() => {
                    resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos);
                }, 2000);
            })
            promesa.then(data => {
                setItems(data);
            })
        }, [id]);  
 */
    //Productos agregados a collection "items"
/*          useEffect(() =>{
            const db = getFirestore();
            const itemsCollection = collection(db, "items");

            arrayProductos.forEach(producto => {
                addDoc(itemsCollection, producto);
            });
        })  */

    //Subida de productos desde la Firestore
     useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })))
        });
    }, [id]); 

    return (
        <>
            {id ? "" : <Carousel />}
            {loading ? <Loading /> : <ItemList items={items} />}
        </>
    )
}

export default ItemListContainer;