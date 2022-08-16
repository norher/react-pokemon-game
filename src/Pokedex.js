import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
    static defaultProps = {
        pokemon : [
            { id: 4, name: 'Charmander', type: 'fire', experience: 62},
            { id: 7, name: 'Squirtle', type: 'water', experience: 63},
            { id: 11, name: 'Metapod', type: 'bug', experience: 72},
            { id: 12, name: 'Butterfree', type: 'flying', experience: 178},
            { id: 25, name: 'Pikachu', type: 'electric', experience: 112},
            { id: 39, name: 'Jigglypuff', type: 'normal', experience: 95},
            { id: 94, name: 'Gengar', type: 'poson', experience: 225},
            { id: 133, name: 'Eevee', type: 'normal', experience: 65}
        ]
    }
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} experience={p.experience} />
                ))}
            </div>
        )
    }
}

export default Pokedex;