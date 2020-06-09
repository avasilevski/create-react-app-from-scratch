import React, {Component} from 'react';
import Cryptocurrency from '../../components/Cryptocurrency/Cryptocurrency'
import {Container} from 'react-bootstrap'
import axios from 'axios'

class CryptoCurrencies extends Component {

  state = {
    coins: []
  }

  async componentDidMount(){
    try{
      let response = await axios.get('https://api.coingecko.com/api/v3/coins/')
      this.setState({coins: response.data})
    }catch(err){
      console.log(err);
    }
  }

  render(){
    const cryptocurrencies = this.state.coins.map(coin => {
      return <Cryptocurrency key={coin.id} name={coin.name} symbol={coin.symbol} price={coin.market_data.current_price.usd}/>
    })
    return(
      <Container>
        {cryptocurrencies}
      </Container>
    );
  }
}

export default CryptoCurrencies;