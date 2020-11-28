import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';

export default class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const {getData} = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  }

  fromUrlToId(url) {
    return +url.slice(49);
  }

  renderItems(arr) {
    return arr.map((item) => {
      return (
        <li
          className="list-group-item"
          key={this.fromUrlToId(item.url)}
          onClick={() => this.props.onCharSelected(this.fromUrlToId(item.url))}
        >
          {item.name}
        </li>
      );
    });
  }

  render() {
    const {itemList} = this.state;

    if (!itemList) {
      return <Spinner/>;
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
