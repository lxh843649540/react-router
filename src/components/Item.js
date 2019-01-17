import React, {Component} from 'react';
// import { withRouter } from 'react-router-dom';

// @withRouter
class Item extends Component {
  constructor(props) {
    super(props);
    this.clickBtn = this.clickBtn.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickBtn}>Item</button>
      </div>
    );
  }

  clickBtn() {
    console.log(this.props.history);
  }
}

export default Item;
