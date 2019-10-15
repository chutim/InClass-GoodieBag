import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCandies } from "../reducers";
import Candy from "./Candy";
export class AllCandies extends Component {
  componentDidMount() {
    this.props.getAllCandies();
  }

  render() {
    return (
      <div>
        {this.props.candies.map(candy => (
          <div key={candy.id}>
            <Candy {...candy} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    candies: state.candies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCandies: () => dispatch(getAllCandies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCandies);
