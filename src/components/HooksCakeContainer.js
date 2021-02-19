import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

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
function HooksCakeContainer() {
  const numberofCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h2>Number of Cakes - {numberofCakes} </h2>
      <Button onClick={() => dispatch(buyCake())}>Buy Cake</Button>
    </Wrapper>
  );
}

export default HooksCakeContainer;
