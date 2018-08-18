import React, { Component } from 'react';

class ItemEdit extends Component {
  constructor(props) {
    console.log('constructor item edit');
    super(props);
    this.state = {
      name: props.item.name,
      surname: props.item.surname
    };
    this.saveItem = this.saveItem.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
  }
  saveItem() {
    let item = this.props.item;
    item.name = this.state.name;
    item.surname = this.state.surname;
    this.props.saveItem(item);
  }
  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleChangeSurname(event) {
    this.setState({
      surname: event.target.value
    });
  }
  render() {
    console.log('render item');
    return (
      <div>
        <input
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <input
          value={this.state.surname}
          onChange={this.handleChangeSurname}
        />
        <button onClick={this.saveItem}>Save</button>
      </div>
    );
  }
}

export default ItemEdit;
