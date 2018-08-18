import React, { Component } from 'react';
import ItemEdit from '../item-edit/item-edit';

class Item extends Component {
  constructor(props) {
    console.log('constructor item');
    super(props);
    this.state = {
      item: props.item,
      edit: false
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.changeEditStatus = this.changeEditStatus.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }
  deleteItem() {
    this.props.deleteItem(this.state.item);
  }
  saveItem(item) {
    this.props.saveItem(item);
    this.setState({edit: false});
  }
  changeEditStatus(status) {
    this.setState({
      edit: status
    });
  }
  render() {
    console.log('render item');
    return (
      <div>
        {this.state.edit === false ?
          <div>{this.state.item.name} {this.state.item.surname}</div>
          : <ItemEdit
              item={this.state.item}
              saveItem={this.saveItem}
            />
        }
        {this.state.edit ? 
          <button onClick={() => {this.changeEditStatus(false)}}>Close</button>
          : <button onClick={() => {this.changeEditStatus(true)}}>Edit</button>
        }
        <button onClick={this.deleteItem}>Delete</button>
        {/*<button onClick={() => {
          this.props.deleteItem(this.props.item)
        }}>Delete</button>*/}
      </div>
    );
  }
}

export default Item;
