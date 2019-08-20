import React, { } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { countUp } from "../modules/counter";

const Index = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: StateInterface) => state.counter.count);

  return (
    <Container>
      <Link href="/about">
        <a title="About Page">About Page</a>
      </Link>
      <h1>{count}</h1>
      <p onClick={() => dispatch(countUp())}>CountUp</p>
    </Container>
  )
};

export default Index;


const Container = styled.div`
  padding: 10px;
  border: 2px solid black;
`
