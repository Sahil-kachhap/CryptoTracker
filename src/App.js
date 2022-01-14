import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Crypto } from './Crypto';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    })
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filterCrypto = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <div className='coin-search'>
         <h1 className='search-text'>Search a currency</h1>
         <form>
           <input type="text" placeholder='Search' className='coin-input' onChange={handleChange}/>
         </form>
      </div>
      {filterCrypto.map(crypto => {
        return (
          <Crypto key={crypto.id} 
          name={crypto.name} 
          image={crypto.image}
          symbol={crypto.symbol}
          marketcap={crypto.market_cap}
          price={crypto.current_price}  
          priceChange={crypto.price_change_percentage_24h}
          volume={crypto.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
