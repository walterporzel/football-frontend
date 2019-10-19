import React, { Component } from 'react';
import styled from 'styled-components';

class Players extends Component {
    constructor(props){
        super(props);
        this.state ={
            players: []
        }
    }
    componentDidMount() {
        fetch('https://frozen-headland-94979.herokuapp.com/players')
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({players: data});
        })
    }
    render(){
        let players = this.state.players.map((player, index) => {
            return(
                <Card>
                    <PlayerPic src={player.strThumb} />
                    {player.strPlayer}
                </Card>
            )
        })
        return (
            <Wrapper>{players}</Wrapper>
        )
    }
}
export default Players

// Page styles
const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px;
`
const PlayerPic = styled.img`
    height: 150px;
    width: 150px;
`