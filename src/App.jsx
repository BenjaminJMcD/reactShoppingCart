import { useState } from 'react'
import Filter from './Filter'
import Cards from './Cards';

function App() {

  const [showFilter, setShowFilter] = useState(true);

  const [itemList, setItemList] = useState([]);


  return (
    <>
      <div className="title">
        <h1>FANCY SHOPS</h1>
      </div>
      <nav>
        <h3>Electronics</h3>
        <h3>Men's Apparel</h3>
        <h3>Women's Apparel</h3>
        <h3>Cart Placeholder</h3>
      </nav>
      {showFilter &&
        <Filter />
      }
      <div className="cardsContainer">
        {/* useEffect with filter ==> array. array.map */}
      </div>
    </>
  )
}

export default App
