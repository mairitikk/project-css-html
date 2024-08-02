

function List() {
   const fruit = [{ name:"virsik", calories:95},
      {id:1, name: "aprikoos", calories:10},
     {id:2, name: "arbuus", calories:5},
      {id:3, name: "mustiaks", calories: 7},
       { id: 4, name: "vaarikas", calories: 100 }];
fruit.sort((a,b) => a.name.localeCompare(b.name)) 
    // fruit.sort((a,b) => b.name.localeCompare(a.name))
    //fruit.sort((a, b) => a.calories - b.calories);
    //


   

     // eslint-disable-next-line react/jsx-key
    const listItems = fruit.map(fruits => <li key={fruit.id}>{fruits.name}: &nbsp; <b>{ fruits.calories}</b></li> )
    // const lowCalFruits = fruit.filter(fruit => fruit.calories < 100);
    //const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}> {lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b></li>);
    
 return (<ol>{listItems}</ol>);
}
export default List