import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { buyCake } from '../redux/index';

const Wrapper = styled.div`
  margin: 10px auto;
  text-align: center;
  width: 50%;
  background: white;
  padding: 10px;
  box-shadow: 0 2px 8px lightgrey;
`;

const Button = styled.button`
  font-family: cursive;
  background: #008975;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #008975;
  border-radius: 3px;
  padding: 7px 10px;
`;

function CakeContainer(props) {
  return (
    <Wrapper>
      <h2>Number of Cakes {props.numberOfCakes}</h2>
      <Button onClick={props.buyCake}>Buy Cake</Button>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
