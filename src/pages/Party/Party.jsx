import React from 'react'

import './Party.css'

function Party() {
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
                            <option value=""  disabled selected>
                                -- Select a primary typing --
                            </option>
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
                            <option 
                                value="" 
                                disabled selected
                            >
                                -- Select a secondary typing --
                            </option>
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
                        <label for="name-search">Search by name:</label>
                        <input type="search" />
                    </div>
                </div>
                <hr />
                {/* <PokemonDisplay
                    v-if="pokemons.length > 0"
                    :pokemons="filteredPokemons"
                    :toggleFavorite="toggleFavorite"
                    :addToParty="addToParty"
                />
                <h2 v-else>
                    Failed to retrieve Pokemon list
                </h2> */}
            </div>
            <div id="party-container">
                <div id="title">
                    <img src="/assets/gif_2.gif" alt="" className="invert" />
                    <h2>Your Party</h2>
                    <img src="/assets/moltres_icon.png" alt="" />
                </div>
                {/* <PartyDisplay 
                    v-if="party.length > 0"
                    :party="party"
                    :removeFromParty="removeFromParty"
                />
                <h2 v-else>
                    Party is currently empty
                </h2> */}
                <div id="party-btn-container">
                    <button id="clear-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill"
                            viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg>
                        Clear party
                    </button>
                    <button id="sav-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512">
                            <path
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 
                                32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                        </svg>
                        Save as favorite party
                    </button>
                    <div v-if="toggleSav">
                        <button id="sav-btn-slot">Slot 1</button>
                        <button id="sav-btn-slot">Slot 2</button>
                    </div>
                    <button id="load-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                            <path
                                d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 
                                352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z" />
                        </svg>
                        Load favorite party
                    </button>
                    <div v-if="toggleLoad">
                        <button id="load-btn-slot">Slot 1</button>
                        <button id="load-btn-slot">Slot 2</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Party