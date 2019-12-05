import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemText: ""
    };
  }
  changeHandler=(event)=> {
    this.setState({itemText: event.target.value});
  };

  submitHandler=(event)=> {
    event.preventDefault();
    this.props.addItem(this.state.itemText);
    this.setState({
      itemText: ""
    });
  };
  
  clearButton =(event)=>{
     event.preventDefault();
     this.props.clearItem(this.state.itemText)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="itemText"
          value={this.state.itemText}
          onChange={this.changeHandler}
        />
        <button type="submit" onClick={this.submitHandler}>Add Item</button>
        <button type="submit" onClick={this.clearButton}>Clear Item</button>
      </form>
    );
  }
}
export default TodoForm;
