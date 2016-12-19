import React from 'react';
import {render} from 'react-dom';

var data = [
    {content: "Beli Telur", tag: "belanja"},
    {content: "Tugas Javascript", tag: "kuliah"},
    {content: "This War of Mine", tag: "game"},
    {content: "Doraemon", tag: "film"}
];

class ListComponent extends React.Component{
   constructor() {
        super();
        this.state={todos: data}
    }
    handleSubmit(){
        alert('submit');
    }
   render() {
    var todos= this.state.todos.map(function(data,i){
        return(
            <li key={i}>{data.content}<em>{data.tag}</em></li>
        )
    });
    
    return(
        <ul>
            {todos}
        </ul>
    ) 

   }
}
export default ListComponent;
