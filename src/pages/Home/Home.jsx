import React from 'react'

import { Link } from 'react-router-dom'

import './Home.css'

function Home() {
  return (
    <div id="home-page-ctn">
        <div id="content-ctn">
            <div id="title">
                <img src="/assets/augmented_game_go_gym_pokemon_reality_video_icon_183170.png" alt="" />
                <h1>Hello there, Trainer!</h1>
                <img src="/assets/pokedex.png" alt="" />
            </div>
            <div id="content">
                <p>
                    Welcome to <b>Pokemon Party Builder</b>! As the name suggest, this website will assist you with building your Pokemon Dream Team.
                    One of the most fun aspect of a Pokemon game is building your own party of Pokemons, so we can bond, adventure and battle with them.
                </p>
                <h2 className="title2">What are you waiting for? Build your own Pokemon party right now!</h2>
                <Link to="/party"  style={{textDecoration: "none", color: "inherit"}}>
                    <button>
                        Build your party
                        <img src="/assets/pokeball-transparent-png-2.png" alt="" />
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home