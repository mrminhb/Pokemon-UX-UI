import React from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';

function PokemonList({ pokemons }) {
  return (
    <div id="pkm-list">
        {
            pokemons.map(pokemon => {
                return (
                    <div className="pkm-ctn" key={pokemon.pid}>   
                        <img src={pokemon.img} alt={pokemon.name} />
                        <h3>#{ pokemon.pid } - { pokemon.name }</h3>
                        {
                            pokemon.favorite > 0 ?
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512"
                                width="24" height="24" color="pink"
                            >
                            <path fill="pink"
                                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 
                                84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg> : ""
                        }
                        <div className="pkm-typing">
                            <button className={pokemon.type1.toLowerCase()}>{ pokemon.type1 }</button>
                            <button className={pokemon.type2.toLowerCase()}>{ pokemon.type2 }</button>
                        </div>
                        <div className="pkm-add">
                            <button className="pt-btn">
                                <AddIcon style={{fontSize: 20}}/>
                                Party
                            </button>
                            <button className="fav-btn" >
                                <FavoriteIcon style={{fontSize: 20}}/>
                                Favorite
                            </button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PokemonList