import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { buyIceCream } from '../redux/icecream/IceCreamAction';

const Wrapper = styled.div`
  margin: 10px auto;
  text-align: center;
  width: 50%;
  background: lightgrey;
  padding: 10px;
  box-shadow: 0 2px 8px lightgrey;
`;

const Button = styled.button`
  font-family: cursive;
  background: chocolate;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid chocolate;
  border-radius: 3px;
  padding: 7px 10px;
`;
function IceCreamContainer(props) {
  return (
    <Wrapper>
      <h2>Number of IceCreams - {props.numberOfIceCreams}</h2>
      <Button onClick={props.buyIceCream}>Buy IceCream</Button>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.icecream.numberOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
