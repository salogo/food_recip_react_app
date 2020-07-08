import React, { Component } from 'react';
import './App.css';
import { recipes } from "./tempList";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

//"proxy":"https://recipesapi.herokuapp.com/api/search",

class App extends Component {
  state = {
    recipes: recipes,
    url: "https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search",
    datails_id:35396
  };
/*
  async getRecipes() {
    
    try{

    const data = await fetch(this.state.url);
    console.log(data)
    const jsonData = await data.json();
    console.log(jsonData)
    this.setState({
      recipes:jsonData.recipes
    });
  } catch(error){
    console.log(error);    
  }
  }

  componentDidMount(){
    this.getRecipes()
  }
  */
  render(){
    
    //console.log(this.state.recipes);
  return (
    <React.Fragment>

    { /*<RecipeList recipes={this.state.recipes} /> */}
    <RecipeDetails id={this.state.datails_id} />

    </React.Fragment>
  );
}
}
export default App;
