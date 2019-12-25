import React, {Component} from 'react';
import Cryptocurrency from '../../components/Cryptocurrency/Cryptocurrency'

class CryptoCurrencies extends Component {
  render(){
    return(
      <div>
        <Cryptocurrency name="Bitcoin" symbol="BTC" price="7000"/>
        <Cryptocurrency name="Ethereum" symbol="ETC" price="125"/>
        <Cryptocurrency name="XRP" symbol="XRP" price="0.1"/>
        <Cryptocurrency name="Bitcoin Cash" symbol="BCH" price="180"/>
      </div>
    );
  }
}

export default CryptoCurrencies;