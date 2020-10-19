import React from 'react';
import { Link } from 'react-router-dom';

function DetailPage(props) {
    const pokemon = props.selected

    return (
        <div className='row'>
            <Link className="back-button" to="/" onClick={() => props.setSelected(null)}>&larr;&nbsp; RETURN TO LIST</Link>
            <div className="detail-page">
                <div className="row">
                    <div className="num">{pokemon.num}</div>
                    <div className="name">{pokemon.name}</div>
                </div>
                
                <div className="row border5">
                    <img className='detail-img' src={pokemon.img} alt={pokemon.img}/>
                    <div>
                        <h4>TYPE</h4>
                        <div className="row">
                            {pokemon.type.map((type) => {
                                return(
                                    <div key={`${type}-div`} className="type-div">
                                                <img className='type-small' key={type} alt={type} src={require(`../Images/type_icons/SVG/${type}.svg`)} />
                                                <p className='hover-text'>{type.toUpperCase()}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <h4>WEAKNESSES</h4>
                        <div className="row">
                            {pokemon.weaknesses.map((weakness) => {
                                return(
                                    <div key={`${weakness}-div`} className="type-div">
                                        <img className='type-small' key={weakness} alt={weakness} src={require(`../Images/type_icons/SVG/${weakness}.svg`)} />
                                        <p className='hover-text'>{weakness.toUpperCase()}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="row">
                            <div style={{margin: 5}}>
                                <h4>HEIGHT</h4>
                                <p>{pokemon.height}</p>
                            </div>
                            <div style={{margin: 5}}>
                                <h4>WEIGHT</h4>
                                <p>{pokemon.weight}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {pokemon.prev_evolution || pokemon.next_evolution ? 
                    <div className="column center">
                        <h4>EVOLUTION</h4>
                        <div className='row'>
                            {props.selectedEvol.map((evol) => {
                                return (
                                    <div className="thumbnail" onClick={() => props.setSelected(props.items.find(el => el.name === evol.name))}>
                                        <h5>{evol.name.toUpperCase()}</h5>
                                        <img className="evol-img" src={`http://www.serebii.net/pokemongo/pokemon/${evol.num}.png`}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                :
                    null
                }
            </div>
        </div>
    )
}

export default DetailPage;