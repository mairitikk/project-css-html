

function List() {
    const fruit = [{ name:"virsik", calories:95},
        {id:1, name: "aprikoos", calories:10},
        {id:2, name: "arbuus", calories:5},
        {id:3, name: "mustiaks", calories: 7},
        { id: 4, name: "vaarikas", calories: 100 }];
    //fruit.sort((a,b) => a.name.localeCompare(b.name)) sorteerida t2hestikulises j2rjekorras
    // fruit.sort((a,b) => b.name.localeCompare(a.name))
    fruit.sort((a, b) => a.calories - b.calories);
    //
    // eslint-disable-next-line react/jsx-key
    const listItems = fruit.map(fruits => <li key={fruit.id}>{fruits.name}: &nbsp; <b>{ fruits.calories}</b></li> )
    return (<ol>{ listItems}</ol>);
}

export default List