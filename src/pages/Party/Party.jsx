import React, { useState } from 'react'

import { party, pokemons } from '../data'
import PokemonList from '../../components/PokemonList/PokemonList'
import PartyDisplay from '../../components/PartyDisplay/PartyDisplay'

import './Party.css'
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';
import UploadIcon from '@mui/icons-material/Upload';

function Party() {

  const [displaySave, setDisplaySave] = useState(false)
  const [displayLoad, setDisplayLoad] = useState(false)

  const onDisplaySave = () => {
    if (displaySave) {
        setDisplaySave(false)
        return;
    }
    setDisplaySave(true)
    return;
  }

  const onDisplayLoad = () => {
    if (displayLoad) {
        setDisplayLoad(false)
        return;
    }
    setDisplayLoad(true)
    return;
  }

  return (
    <div className="page-ctn">
        <div id="selection-party-container">
            <div id="selection-container">
                <div id="title">
                    <img src="/assets/attribute.png" alt="" className="attribute_list" />
                    <h2>Pokemon Selection</h2>
                    <img src="/assets/gif_3.gif" alt="" className="attribute_list" />
                </div>
                <div id="sort-container">
                    <div id="type-sort-ctn">
                        <label>Sort by type:</label>
                        <select name="type-1">
                            <option value="" disabled selected>-- Select a primary typing -- </option>
                            <option value="">All</option>
                            <option className="normal" value="Normal">Normal</option>
                            <option className='fire' value="Fire">Fire</option>
                            <option className='water' value="Water">Water</option>
                            <option className='grass' value="Grass">Grass</option>
                            <option className='electric' value="Electric">Electric</option>
                            <option className='ice' value="Ice">Ice</option>
                            <option className='fighting' value="Fighting">Fighting</option>
                            <option className='poison' value="Poison">Poison</option>
                            <option className='ground' value="Ground">Ground</option>
                            <option className='flying' value="Flying">Flying</option>
                            <option className='psychic' value="Psychic">Psychic</option>
                            <option className='bug' value="Bug">Bug</option>
                            <option className='rock' value="Rock">Rock</option>
                            <option className='ghost' value="Ghost">Ghost</option>
                            <option className='dark' value="Dark">Dark</option>
                            <option className='dragon' value="Dragon">Dragon</option>
                            <option className='steel' value="Steel">Steel</option>
                        </select>
                        <select  name="type-2" >
                            <option value="" disabled selected>-- Select a secondary typing --</option>
                            <option value="">All</option>
                            <option className="normal" value="Normal">Normal</option>
                            <option className='fire' value="Fire">Fire</option>
                            <option className='water' value="Water">Water</option>
                            <option className='grass' value="Grass">Grass</option>
                            <option className='electric' value="Electric">Electric</option>
                            <option className='ice' value="Ice">Ice</option>
                            <option className='fighting' value="Fighting">Fighting</option>
                            <option className='poison' value="Poison">Poison</option>
                            <option className='ground' value="Ground">Ground</option>
                            <option className='flying' value="Flying">Flying</option>
                            <option className='psychic' value="Psychic">Psychic</option>
                            <option className='bug' value="Bug">Bug</option>
                            <option className='rock' value="Rock">Rock</option>
                            <option className='ghost' value="Ghost">Ghost</option>
                            <option className='dark' value="Dark">Dark</option>
                            <option className='dragon' value="Dragon">Dragon</option>
                            <option className='steel' value="Steel">Steel</option>
                            <option value="None">
                                None
                            </option>
                        </select>
                    </div>
                    <div id="name-search-ctn">
                        <label htmlFor="name-search">Search by name:</label>
                        <input type="search" />
                    </div>
                </div>
                <hr />
                {
                    pokemons ? 
                    <PokemonList pokemons={pokemons}/> : 
                    <h2>
                        Failed to retrieve Pokemon list
                    </h2>
                }
            </div>
            <div id="party-container">
                <div id="title">
                    <img src="/assets/gif_2.gif" alt="" className="invert" />
                    <h2>Your Party</h2>
                    <img src="/assets/moltres_icon.png" alt="" />
                </div>
                {   
                    party ? 
                    <PartyDisplay party={party}/> :
                    <h2>
                        Party is currently empty
                    </h2> 
                }
                <div id="party-btn-container">
                    <button id="clear-btn">
                        <ClearIcon />
                        Clear party
                    </button>
                    <button id="sav-btn" onClick={() => onDisplaySave()}>
                        <SaveIcon />
                        Save as favorite party
                    </button>
                    {
                        displaySave ?
                        <div className='slot-btn-ctn'>
                            <button id="sav-btn-slot">Slot 1</button>
                            <button id="sav-btn-slot">Slot 2</button>
                        </div> : ""
                    }
                    <button id="load-btn" onClick={() => onDisplayLoad()}>
                        <UploadIcon />
                        Load favorite party
                    </button>
                    {
                        displayLoad ?
                        <div className='slot-btn-ctn'>
                            <button id="load-btn-slot">Slot 1</button>
                            <button id="load-btn-slot">Slot 2</button>
                        </div> : ""
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Party