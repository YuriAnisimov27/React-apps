import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: 'Don\'t Worry, Be Happy)',
          important: true,
          like: false,
          id: 1,
        },
        {
          label: 'Greed Is Good',
          important: false,
          like: false,
          id: 2,
        },
        {
          label: 'Terminator 2',
          important: false,
          like: false,
          id: 3,
        }
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

      return {
        data: newArr
      }
    })
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }

  toggleAttribute(id, attr) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const old = data[index];
      const newItem = {...old, [attr]: !old[attr]}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return {
        data: newArr
      }
    })
  }

  onToggleImportant(id) {
    this.toggleAttribute(id, 'important')
  }

  onToggleLiked(id) {
    this.toggleAttribute(id, 'like')
  }

  render() {
    const {data} = this.state
    const liked = data.filter(item => item.like).length
    const allPosts = data.length

    return (
      <div className='app'>
        <AppHeader liked={liked} allPosts={allPosts}/>
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}/>
        <PostAddForm onAdd={this.addItem}/>
      </div>
    )
  }
}