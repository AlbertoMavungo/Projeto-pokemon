import React, { useState, useEffect } from "react";
import { getPokemon } from "../../services/pokemon";
import styled from "styled-components";
import "./index.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/button";

const Home = () => {
    const [homeData, setHomeData] = useState({ pokes: [] });
    const [showFullList, setShowFullList] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const poke = await getPokemon();
            setHomeData({ pokes: poke })
        }
        fetchData()
    }, []);

    const toggleList = () => {
        setShowFullList(!showFullList);
    };
    return (
        <Div>
            <H1>Pokemóns</H1>
            <Ul>
                {
                    homeData.pokes
                        .slice(0, showFullList ? homeData.pokes.length : 10)
                        .map((poke, index) =>
                            <Li key={index}>
                                <Link to={`/poke/${poke.id}`} className="link">
                                    <p>{poke.name}</p>
                                    <img src={poke.sprites.front_default} />
                                </Link>
                            </Li>
                        )
                }
            </Ul>
            <Button showFullList={showFullList} toggleList={toggleList}/>
        </Div>
    )
}

const Div = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column
`
const Ul = styled.ul`
    display: flex;
    background: linear-gradient(to bottom, #800080, #008000);
    padding: 15px 30px ;
    min-height: 200px;
    width:70%;
    margin-top:110px;
    flex-wrap: wrap;
    border-radius:20px;
    li:nth-child(20),
     {img {transform: scale(1.7)}};
    align-items:center;
    justify-content: center
`

const H1 = styled.h1`
    position: absolute;
    top: 5px;
    color:#800080;
`

const Li = styled.li`
    list-style:none;
    border: 1px solid;
    margin: 5px;
    height:180px;
    width: 220px;
    text-align:center;
    background-color:#ffffff;
    border-radius:10px;
    border: 1.5px solid #800080;
    &:hover {
        background-color: #ADD8E6;
        transform: scale(1.05);
        transition: background-color 0.3s, transform 0.3s;
    }
`
export default Home