import React, { Component, useEffect } from 'react';

import './item-details.css';

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  };

  // useEffect(() => {
  //   updateItem();
  // }, [props.itemId])


  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item, 
          image: getImageUrl(item) 
        });
      });
  }

  render() {

    const { item, image } = this.state;
    if (!item) {
      return <span>Select a person from a list</span>;
    }

    const { name } = item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image}
          alt="character"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            { 
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
                })
            }
          </ul>
        </div>
      </div>
    )
  }
}
