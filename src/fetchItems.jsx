import {useState, useEffect} from 'react';


function fetchItems() {

    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => {
            if (response.status >= 400) {
              throw new Error("server error");
            }
            return response.json();
          })
          .then((response) => setFilteredItems(response));
    }, []);
        
    
    return filteredItems;

}

export default fetchItems