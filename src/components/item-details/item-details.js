import React, { useEffect, useState } from 'react';

import './item-details.css';

const initState = {
  item: null,
  image: null
};
const ItemDetails = (props) => {

  const [state, setState] = useState(initState);

    // useEffect(() => {
  //   updateItem();
  // }, [props.itemId])

  // componentDidUpdate(prevProps) {
  //   if (this.props.itemId !== prevProps.itemId) {
  //     this.updateItem();
  //   }
  // }

  // componentDidMount() {
  //   this.updateItem();
  // }

  useEffect(() => {
    let cancelled = false;
    if (!cancelled) updateItem();
    return () => cancelled = true;
  })

  const updateItem = () => {
    const { itemId, getData, getImageUrl } = props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        setState({
          item, 
          image: getImageUrl(item) 
        });
      });
  }

    const { item, image } = state;
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
              React.Children.map(props.children, (child) => {
                return React.cloneElement(child, { item });
                })
            }
          </ul>
        </div>
      </div>
    )

}

export default ItemDetails;
