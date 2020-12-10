import React, { useState } from 'react';


// Components
import List from './List';
import Input from './Input';

function FruitContainer(props) {
        const [fruitsToDisplay, setfruitsToDisplay] = useState(props.fruits);
        const [filterValue, setfilterValue] = useState('')
        console.log('---- state ----')
        console.log(fruitsToDisplay);
        console.log('---- props ----')
        console.log(props.fruits)

        function handleFilterChange(e) {
            e.preventDefault();
            let filterValue = e.target.value;
            // Remove the fruits that don't contain the filter value
            const filteredFruitList = this.props.fruits.filter(fruit => {
                return fruit.toLowerCase().includes(filterValue.toLowerCase())
    
                // Same thing above for filteredFruitList
                // if (fruit.toLowerCase() === filterValue.toLowerCase()) {
                //     return true;
                // }
            })
    
            this.setState({ fruitsToDisplay: filteredFruitList, filterValue})
        }
        
        return(
            <div>
                <Input value={filterValue} onChange={handleFilterChange}/>
                <List fruits={fruitsToDisplay}/>
            </div>
        );
};

export default FruitContainer;