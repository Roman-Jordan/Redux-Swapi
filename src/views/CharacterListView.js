import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {actionHandler} from '../actions';
// import actions

class CharacterListView extends React.Component {
  

  componentDidMount() {
    console.log(this.props)
    this.props.actionHandler()
    // call our action
  }

  render() {
    console.log(this.props.characters)
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state =>{
  console.log(state)
  return{
    characters:state.characters.characters,
    fetching:state.characters.fetching
    
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps,{actionHandler})(CharacterListView);
