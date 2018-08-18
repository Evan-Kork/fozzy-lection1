import React, { Component } from 'react';
import Item from '../item/item';

class ItemsList extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      itemsList: [
        {
          id: 1,
          name: 'First',
          surname: 'First'
        },
        {
          id: 2,
          name: 'Second',
          surname: 'Second'
        },
        {
          id: 3,
          name: 'Second',
          surname: 'Second'
        }
      ]
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }
  deleteItem(itemDeleted) {
    console.log('deleteItem');
    let itemsList = this.state.itemsList;
    itemsList = itemsList.filter((item) => {
      return item.id !== itemDeleted.id;
    });
    this.setState({itemsList: itemsList});
  }
  saveItem(changedItem) {
    let itemsList = this.state.itemsList;
    itemsList = itemsList.map((item) => {
      if (item.id === changedItem.id) {
        item = changedItem;
      }
      return item;
    });
    this.setState({itemsList: itemsList});
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>List students</h1>
        <ul>
          {this.state.itemsList.map((item, index) => {
            return(
              <li key={index}>
                <Item
                  item={item}
                  deleteItem={this.deleteItem}
                  saveItem={this.saveItem}
                />
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
