import React, { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        setInput(event.target.value);
        console.log(event.target.value);
    };

    const storeItems = (event) => {
        event.preventDefault();
        setItems([...items, input]);
        setInput("");
        localStorage.setItem("items", JSON.stringify([...items, input]));
    };

    const deleteItem = (key) => {
        const newItems = items.filter((_, index) => index !== key);
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
    };

    return (
        <div className="todo-container">
            <form className="input-section" onSubmit={storeItems}>
                <h1>TodoApp</h1>
                <input 
                    type="text" 
                    value={input} 
                    onChange={handleChange} 
                    placeholder="enter items.." 
                />
            </form>

            <ul>
                {items.map((data, index) => (
                    <li key={index}>
                        {data} 
                        <i className="fa-solid fa-trash-can" onClick={() => deleteItem(index)}></i>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
// import React, { Component } from "react";
// import "./TodoApp.css";

// export class TodoApp extends Component{
//     state = {
//         input:" ",
//         items:[]
//     };
    
//     handleChange = event => {
//         this.setState({
//             input:event.target.value
//         });
//         console.log(this.state.input);
//     };
    
//     storeItems = event => {
//         event.preventDefault(); 
//         const { input } = this.state;  
//         console.log("running",this.state);
        
        
        
//         this.setState({
//             items: [...this.state.items,input], 
//             input: " "
//         });
//         console.log(this.state.items);
        
//         localStorage.setItem("item",JSON.stringify(this.state.items));
//     };
//     deleteItem = key => {
//         this.setState(
//             {
//                 items:this.state.items.filter((data,index) => index !== key)
//             }
//         );
        

//     };




//     render(){
//         const { input,items }=this.state;
//         console.log(items);
        
//         return (
//             <div className="todo-container">
               
//               <form className="input-section" onSubmit={this.storeItems}>
//               <h1>TodoApp</h1>

//                     <input type="text" value={input} onChange={this.handleChange} placeholder="enter items.."/>
                    
//               </form>

//               <ul>
//                 {items.map((data, index) => (
//                     <li key={index}>{data} <i className="fa-solid fa-trash-can" onClick= { () => this.deleteItem(index)}></i>
//                     </li>
//                 ))}
//               </ul>
//             </div>
//         );
//     }
// }

// export default TodoApp;