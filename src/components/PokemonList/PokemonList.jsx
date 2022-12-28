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
                            <FavoriteIcon style={{fontSize: 24, color: 'pink'}}/> : ""
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