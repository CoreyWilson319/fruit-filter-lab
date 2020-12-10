import React, { Component } from 'react';


// Components
import List from './List';
import Input from './Input';

class FruitContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            // initialize the fruit list to the full list passed into props
            fruitsToDisplay: props.fruits,
            // initialize the filter value to empty string
            filterValue: '',
        };
    }

    handleFilterChange = (e) => {
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

    render() {
        // Cannot console.log() inside of the return
        // Inside of Input Component, to access props, I will say props.value
        // inside of List Component, to access props, I wills ay props.fruits
        console.log('---- state ----')
        console.log(this.state.fruitsToDisplay);
        console.log('---- props ----')
        console.log(this.props.fruits)
        return(
            <div>
                <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay}/>
            </div>
        );
    }
}

export default FruitContainer;