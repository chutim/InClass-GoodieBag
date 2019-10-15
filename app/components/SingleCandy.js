import React, { Component } from "react";
import {
  getSingleCandy,
  increaseQuantity,
  decreaseQuantity
} from "../reducers";
import { connect } from "react-redux";

class SingleCandy extends Component {
  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    this.props.getSingleCandy(this.props.match.params.id); //WHAT IS MATCH AND WHYDO WE NEED IT????
  }

  increase() {
    this.props.increaseQuantity(this.props.match.params.id);
  }

  decrease() {
    this.props.decreaseQuantity(this.props.match.params.id);
  }
  render() {
    console.log(this.props.singleCandy);
    return (
      <div>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>

        <p>{this.props.singleCandy.name}</p>
        <p>{this.props.singleCandy.quantity}</p>
        <img src={this.props.singleCandy.imageUrl}></img>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleCandy: id => dispatch(getSingleCandy(id)),
    increaseQuantity: id => dispatch(increaseQuantity(id)),
    decreaseQuantity: id => dispatch(decreaseQuantity(id))
  };
};

const mapStateToProps = state => {
  return {
    singleCandy: state.singleCandy
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
