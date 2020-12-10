import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super()
        this.state = {

        };
    }

    render() {
        const fruitItems = this.props.fruits.map((eachFruit, index) => {
        return <li key={index}>{eachFruit}</li>
        })

        return(
            <div>
                <ul className="listedFruits">
                    {fruitItems}
                </ul>
            </div>
        );
    }
}

export default List;