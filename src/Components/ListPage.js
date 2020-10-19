import React from 'react';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import ListItem from './ListItem';

function ListPage(props) {
    return (
        <div>
            <div className="filters-container">
                <Filters 
                    items={props.items}
                    types={props.types}
                    weaknesses={props.weaknesses}
                    filteredList={props.filteredList}
                    setFilteredList={props.setFilteredList}
                    typeFilters={props.typeFilters}
                    setTypeFilters={props.setTypeFilters}
                    weaknessFilters={props.weaknessFilters}
                    setWeaknessFilters={props.setWeaknessFilters}
                    search={props.search}
                    setSearch={props.setSearch}
                />
            </div>
            <div className="filters-filler"></div>
            <div className="list-container">
                {props.filteredList.filter(item => (
                    item.name.slice(0, props.search.length).toUpperCase() === props.search.toUpperCase()
                )).map(item => (
                    <Link style={{width: '650px', margin: '5px'}} key={`${item.name}-link`} to={`/detail`}>
                    <ListItem 
                        key={item.name}
                        item={item}
                        selected={props.selected}
                        setSelected={props.setSelected}
                        selectedEvol={props.selectedEvol}
                        setSelectedEvol={props.setSelectedEvol}
                    />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ListPage;