function List (props){
    console.log(props)
    const fruitItems = props.fruits.map((eachFruit, index) => {
    return <li key={index}>{eachFruit}</li>
    });

    return(
            <div>
                <ul className="listedFruits">
                    {fruitItems}
                </ul>
            </div>
        );
    }


export default List;