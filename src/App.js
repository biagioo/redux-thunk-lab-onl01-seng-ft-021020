// src/App.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList';

class App extends Component {
 
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
 
  render() {
    console.log(this.props.loading) // log will fire every time App renders
    if (this.props.loading === false){
      return (
        <div className="App">
          <h1>CatBook</h1>
          <CatList catPics={this.props.catPics}/>
        </div>
      );
    } else {
      return(
        <h1>Loading... (:</h1>
      )
    }
  }
}
 
const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
