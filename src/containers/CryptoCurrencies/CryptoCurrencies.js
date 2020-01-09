import React, {Component} from 'react';
import Cryptocurrency from '../../components/Cryptocurrency/Cryptocurrency'
import {Container} from 'react-bootstrap'

class CryptoCurrencies extends Component {
  render(){
    return(
      <Container>
        <Cryptocurrency name="Bitcoin" symbol="BTC" price="7000"/>
        <Cryptocurrency name="Ethereum" symbol="ETC" price="125"/>
        <Cryptocurrency name="XRP" symbol="XRP" price="0.1"/>
        <Cryptocurrency name="Bitcoin Cash" symbol="BCH" price="180"/>
      </Container>
    );
  }
}

export default CryptoCurrencies;