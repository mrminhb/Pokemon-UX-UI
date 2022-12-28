import React from 'react'

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function PartyDisplay({ party }) {
  return (
    <div id="party-list">
        {
            party.map(pokemon => {
                return (
                    <div class="party-pkm">
                        <img src={ pokemon.img } alt={ pokemon.name } />
                        <h3>{ pokemon.name }</h3>
                        <div class="pkm-typing">
                            <button class={ pokemon.type1.toLowerCase() }>{ pokemon.type1 }</button>
                            <button class={ pokemon.type2.toLowerCase() }>{ pokemon.type2 }</button>
                        </div>
                        <div class="pkm-add">
                            <button class="rmv-btn">
                                <RemoveCircleIcon style={{ fontSize: 16 }}/>
                                Remove
                            </button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PartyDisplay