import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailsPokemon } from "../../services/pokemon";
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


const PokeDetails = () => {
    const [pokemonList, setPokemonList] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const list = await getDetailsPokemon(id);
            setPokemonList(list)
        };
        fetchData();
    }, []);

    return (
        <Div>
            <H2>Detalhes</H2>
            {
                <Div1>
                    <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                    <h1>{pokemonList.name}</h1>
                    <Subtitulos>Movimentos</Subtitulos>
                    <Ul>
                        {pokemonList.moves ? (
                            pokemonList.moves.map((move, index) => (
                                <Li key={index}>
                                    <p>🐁{move.move.name}</p>
                                </Li>
                            ))
                        ) : (
                            <p>Carregando movimentos...</p>
                        )}
                    </Ul>
                    <div style={{ display: 'flex', marginTop: '-20px' }}>
                        <HabilitiesEndTypes>
                            <Subtitulos >Abilidades</Subtitulos>
                            <Ul>
                                {pokemonList.abilities ? (
                                    pokemonList.abilities.map((ability, index) => (
                                        <Li key={index}  >
                                            <p>⭐{ability.ability.name}</p>
                                        </Li>
                                    ))
                                ) : (<p>carregando...</p>)
                                }
                            </Ul>
                        </HabilitiesEndTypes>
                        <HabilitiesEndTypes>
                            <Subtitulos >Tipo</Subtitulos>
                            <Ul>
                                {pokemonList.types ? (
                                    pokemonList.types.map((type, index) => (
                                        <Li key={index}>
                                            <p>🔥{type.type.name}</p>
                                        </Li>
                                    ))

                                ) : (<p>carregando...</p>)
                                }
                            </Ul>
                        </HabilitiesEndTypes>
                    </div>
                    <Link to='/'><FontAwesomeIcon icon={faHouse} size="2x" style={{ marginBottom: '10px' }} /></Link>
                </Div1>
            }
        </Div>
    );
}

const Img = styled.img`
 margin-top: '20px' 
`

const Div = styled.div`
   display:flex;Img
   justify-content: center;
   align-items: center;
   flex-direction: column;
`

const H2 = styled.h2`
    top: 5px;
    color:#800080;
`
const Div1 = styled.div`
    display: flex;
    flex-direction:column;
    background: linear-gradient(to bottom, #800080, #008000);
    min-height: 130px;
    width:40%;
    margin-top:40px;
    flex-wrap: wrap;
    border-radius:20px;
    img {transform: scale(2)};
    align-items:center;
    justify-content: center;
    color: #ffffff
`

const Subtitulos = styled.h2`
    font-size:25px;
    font-weight: bold;
`

const Ul = styled.ul`
 display:flex;
 flex-wrap: wrap;  
 font-size:20px;
 list-style:none;

`
const Li = styled.li`
margin:-40px 7px 0px 7px;
`

const HabilitiesEndTypes = styled.div`
    display: 'flex'; 
    flex-direction: 'column';
    align-items: 'center'
`

export { PokeDetails }