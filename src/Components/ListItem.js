import React from 'react'

function ListItem(props) {
    const handleSelect = () => {
        const pokemon = props.item
        props.setSelected(pokemon)
    }

    return (
        <div className='center'>
            <div className="list-item" onClick={handleSelect}>
                <div className='image'>
                    <img className="list-item-img" src={props.item.img} alt={props.item.name}/>
                </div>
                <div className='info'>
                    <div className='name-num'>
                        <div className='num'>{props.item.num}</div>
                        <div className='name'>{props.item.name}</div>
                    </div>
                    <div className='types-weaknesses'>
                        <div className='types'>
                            <div style={{margin: '-5px 0 4px 0'}}>TYPE</div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                {props.item.type.map(type => (
                                <div key={`${type}-div`} className="type-div">
                                    <img className='type-small' key={type} alt={type} src={require(`../Images/type_icons/SVG/${type}.svg`)} />
                                    <p className='hover-text'>{type.toUpperCase()}</p>
                                </div>
                                ))} 
                            </div>
                        </div>
                        <div className='weaknesses'>
                            <div style={{margin: '-5px 0 4px 0'}}>WEAKNESSES</div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                {props.item.weaknesses.map(weakness => (
                                <div key={`${weakness}-div`} className="type-div">
                                    <img className='type-small' key={weakness} alt={weakness} src={require(`../Images/type_icons/SVG/${weakness}.svg`)} />
                                    <p className='hover-text'>{weakness.toUpperCase()}</p>
                                </div>
                                ))} 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListItem