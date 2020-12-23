import {useState, useEffect} from 'react';
import Itemcount from '../componets/store/Itemcount';


const ItemList = () => {
    const [items, setItems] = useState([]);
    
    const products = [
        {
            id: 1,
            titulo: 'Remera Unicornio',
            precio: 1000,
        },
        {
            id: 2,
            titulo: 'Remera 2',
            precio: 1150,
        },
        {
            id: 3,
            titulo: 'Remera 3',
            precio: 950,
        },
        {
            
        },
    ]

    const getProducts= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 5000)
    })

    task
    .then (resolucion)
    .catch (error)
    
    const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

}




export default ItemList
