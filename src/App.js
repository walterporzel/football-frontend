import React from 'react';
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import Players from './Players';
import PlayerDetail from './PlayerDetail';

function App() {
  return (
    <div>
      <Head>FootballDB</Head>
      <Route path='/' exact component = {Players} />
      <Route path='/players' exact component = {Players} />
      <Route path='/players/:name' exact component = {PlayerDetail} /> 
    </div>
  );
}

export default App;
const Head = styled.div`
    width: 100vw;
    height: 100px;
    font-size:24px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://www.simpsonville.com/sites/default/files/styles/full_node_primary_extra_wide/public/imageattachments/parksrec/page/3941/football_1.jpg?itok=WM618Usx');
    background-size: cover;
    color: white;
`