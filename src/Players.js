import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Players(){
    const [data, setData] = useState( [] );
    const [search, setSearch] = useState ( {search: ''} );

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://frozen-headland-94979.herokuapp.com/players'
            );
            setData(result.data)
        }

        fetchData();
    }, []);

    const onSearchChange = (e) => {
        setSearch({search: e.target.value})
        console.log(search.search)
    }

    return(
        <Wrapper>
            <input type="search" placeholder="search players" onChange={onSearchChange}/>
            <PlayersWrapper>
                {data.filter(player => {
                    let searchValue = search.search.toLowerCase()
                    let playerName = player.strPlayer.toLowerCase()
                    if(!searchValue){
                        return true
                    }
                    else if(playerName.includes(searchValue)){
                        return true
                    }
                    else{
                        return false
                    }
                }).map(item => (
                    <Card>
                        <PlayerPic src={item.strThumb} />
                        {item.strPlayer}
                    </Card>
                ))}
            </PlayersWrapper>
        </Wrapper>
    )
}

export default Players

// Page styles
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const PlayersWrapper = styled.div`
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