import React, { useEffect, useState } from 'react';

function Filters(props) {
    
    const handleChange = event => {
        props.setSearch(event.target.value);
    };
    
    const handleTypeFilter = (e) => {
        let typeFilters = [...props.typeFilters]

        if (typeFilters.indexOf(e.target.id) > -1) {
            typeFilters.splice(typeFilters.indexOf(e.target.id), 1)
        } else {
            typeFilters.push(e.target.id)
        };

        if (e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
        } else {
            e.target.classList.add('selected');
        }

        props.setTypeFilters(typeFilters);
    }
    
    const handleWeaknessFilter = (e) => {
        let weaknessFilters = [...props.weaknessFilters]
        if (weaknessFilters.indexOf(e.target.id) > -1) {
            weaknessFilters.splice(weaknessFilters.indexOf(e.target.id), 1)
        } else {
            weaknessFilters.push(e.target.id)
        };

        if (e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
        } else {
            e.target.classList.add('selected');
        }

        props.setWeaknessFilters(weaknessFilters);
    }


    useEffect(() => {
        let fullList = [...props.items]
        if (!props.typeFilters.length && !props.weaknessFilters.length) {
            props.setFilteredList(fullList);
            return;
        }
        let filtList = fullList.filter((item) => {
            let typeFiltered = true;
            let weaknessFiltered = true;
            props.typeFilters.forEach((type) => {
                if (!item.type.includes(type)) {
                    typeFiltered = false;
                }
            });
            props.weaknessFilters.forEach((weakness) => {
                if (!item.weaknesses.includes(weakness)) {
                    weaknessFiltered = false;
                }
            });

            return typeFiltered && weaknessFiltered;
        })
        props.setFilteredList(filtList)
    }, [props.typeFilters, props.weaknessFilters])

    return (
        <div>
            <div className={true || props.typeFilters.length || props.weaknessFilters.length ? 'filter-div' : 'hidden'}>
            <input type="text" placeholder="Search Pokémon" value={props.search} onChange={handleChange}/>
                <h4>FILTER TYPE</h4>
                <div className="filters">
                    {props.types.sort().map((type) => {
                        return (
                        <div key={type} id={type} className={props.typeFilters.includes(type) ? 'filter-button selected' : 'filter-button'} onClick={handleTypeFilter}>{type}</div>
                        )
                    })}
                </div>
                <br/>
                <h4>FILTER WEAKNESSES</h4>
                <div className="filters">
                    {props.weaknesses.sort().map((weakness) => {
                        return (
                        <div key={weakness} id={weakness} className={props.weaknessFilters.includes(weakness) ? 'filter-button selected' : 'filter-button'} onClick={handleWeaknessFilter}>{weakness}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Filters;