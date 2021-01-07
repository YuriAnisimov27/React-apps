import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info" onClick={() => this.props.onSelectFilter('')}>All
        </button>
        <button type="button"
                className="btn btn-outline-secondary" onClick={() => this.props.onSelectFilter('Active')}>Active
        </button>
        <button type="button"
                className="btn btn-outline-secondary" onClick={() => this.props.onSelectFilter('Done')}>Done
        </button>
      </div>
    );
  }
}
