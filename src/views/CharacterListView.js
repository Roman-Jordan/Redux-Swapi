import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import {actionHandler} from '../actions';

class CharacterListView extends React.Component {
  
  componentDidMount() {
    this.props.actionHandler()
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetching && <h1>The force is taking forever... Episode 3002</h1>}
        {this.props.error && <h1>Something Went Wrong...</h1>}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    characters : state.characters.characters,
    fetching : state.characters.fetching,
    error : state.characters.error
  }
}
export default connect(mapStateToProps,{actionHandler})(CharacterListView);
