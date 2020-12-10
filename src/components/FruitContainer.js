import React, { useState } from 'react';


// Components
import List from './List';
import Input from './Input';

function FruitContainer(props) {
        const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
        const [filterValue, setFilterValue] = useState('')
        // console.log('---- state ----')
        // console.log(fruitsToDisplay);
        // console.log('---- props ----')
        // console.log(props.fruits)

        const handleFilterChange = (e) => {
            e.preventDefault();
            let filteredValue = e.target.value;
            const filteredFruitList = props.fruits.filter((fruit) => {
                return fruit.toLowerCase().includes(filteredValue.toLowerCase())
            })
    
            setFruitsToDisplay(filteredFruitList)
            setFilterValue(filteredValue)
        }
        
        return(
            <div>
                <Input value={filterValue} onChange={handleFilterChange}/>
                <List fruits={fruitsToDisplay}/>
            </div>
        );
};

export default FruitContainer;