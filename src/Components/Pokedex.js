import React, { useEffect, useState } from 'react';
import ListPage from './ListPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailPage from './DetailPage';

function Pokedex() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [typeFilters, setTypeFilters] = useState([]);
    const [weaknessFilters, setWeaknessFilters] = useState([]);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState(null);
    const [prevSelected, setPrevSelected] = useState(null)
    const [selectedEvol, setSelectedEvol] = useState([]);

    

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.pokemon);
                    setFilteredList(result.pokemon);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    useEffect(() => {
        setPrevSelected(items[0])
    }, [items])

    useEffect(() => {
        if (selected && selected !== prevSelected) {
            setPrevSelected(selected);
        }
    }, [selected])

    useEffect(() => {
        let evolutions = [];
        if (selected && selected.prev_evolution) {
            selected.prev_evolution.forEach((evol) => {
                evolutions.push(evol)
            })
        };
        if (selected && (selected.prev_evolution || selected.next_evolution)) {
            evolutions.push(selected)
        };
        if (selected && selected.next_evolution) {
            selected.next_evolution.forEach((evol) => {
                evolutions.push(evol)
            })
        };
        setSelectedEvol(evolutions)
    }, [selected])
    

    if (error) {
        return <div>Error: error.message</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        let typeList = [];
        let weaknessList = [];
        items.forEach((item) => {
            item.type.forEach((type) => {
                if (!typeList.includes(type)) typeList.push(type);
            })
            item.weaknesses.forEach((weakness) => {
                if (!weaknessList.includes(weakness)) weaknessList.push(weakness);
            })
        });
        return (
            <div>
                <header className='center'>
                    <img style={{height: '200px'}} src="https://pbs.twimg.com/media/EOgcFoyXkAAzlbL.png:large"/>
                </header>
                <header className='filler'> </header>
                <BrowserRouter basename='/pokedex-challenge'>
                <Switch>
                    <Route exact path='/' render={() => 
                        <ListPage 
                            items={items}
                            types={typeList}
                            weaknesses={weaknessList}
                            filteredList={filteredList}
                            setFilteredList={setFilteredList}
                            typeFilters={typeFilters}
                            setTypeFilters={setTypeFilters}
                            weaknessFilters={weaknessFilters}
                            setWeaknessFilters={setWeaknessFilters}
                            search={search}
                            setSearch={setSearch}
                            selected={selected}
                            setSelected={setSelected}
                            selectedEvol={selectedEvol}
                            setSelectedEvol={setSelectedEvol}
                        />
                    }/>
                    {selected ? 
                        <Route exact path="/detail" render={() => 
                            <DetailPage
                                selected={selected}
                                setSelected={setSelected}
                                items={items}
                                selectedEvol={selectedEvol}
                                setSelectedEvol={setSelectedEvol}
                            />
                        }/>
                    : 
                        <Route exact path="/detail" render={() => 
                            <DetailPage
                                selected={prevSelected}
                                setSelected={setSelected}
                                items={items}
                                selectedEvol={selectedEvol}
                                setSelectedEvol={setSelectedEvol}
                            />
                        }/>
                    }
                </Switch>
                </BrowserRouter>
            </div> 
        )
    }
}

export default Pokedex;