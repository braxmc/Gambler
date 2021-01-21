import React from 'react';

import { HomeWrap, Header, GameWrap, Button } from './HomeElements'

const Home = () => (
  <HomeWrap>
    <Header>Gambler</Header>
    <GameWrap to='/doubleornothing'>
      <Button>Double or Nothing</Button>
    </GameWrap>
  </HomeWrap>
)

export default Home;