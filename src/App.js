import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import {data} from './data'
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'
console.log('data', data)
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks: data

    };
  }
      toggleItem = (itemID)=>{
        console.log(itemID,'item')
        this.setState({
           tasks: this.state.tasks.map((item)=>{
              if(itemID===item.id){
                return{
                  ...item,
                  completed: !item.completed
                
                };
              };
              return item;
            })
        })
       }
       addItem = (itemText) =>{
         const newItem ={
           task: itemText,
           completed: false,
           id: Date.now()
         };
         this.setState({
          tasks: [...this.state.tasks, newItem]
         });
       };
       clearItem =(itemText) => {
         this.setState({tasks:this.state.tasks.filter((item)=>{
           return !item.completed
           
         })
        
        })
        

       }
       

  render() {
    // console.log('array', data)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearItem={this.clearItem}/>
        <TodoList data={this.state.tasks} toggleItem={this.toggleItem}/>
      </div>
    );
  }
}
// let newApp = new App();
// console.log(newApp)

export default App;
