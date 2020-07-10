import React, { Component } from 'react';
import './App.css';
import { recipes } from "./tempList";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import ViewRecipe from './components/ViewRecipe';


class App extends Component {
  state = {
    recipes: recipes,
    url: "https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?",
    base_url: "https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?",
    datails_id: "",
    pageIndex: 1,
    search: "",
    query:'&q=',
    error:'',

    recipename:'',
    description:'',
    URLimages:'',
    recipesArray:[]
  
  };

  async getRecipes() {

    try {

      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log(jsonData);
      if (jsonData.recipes.length === 0){
           this.setState(()=>{
             return {error:"Try another Key world"}
           })
      }
      else {
        this.setState(()=>{
          return {recipes:jsonData.recipes}
        })
      }
      
    } catch (error) {
      console.log(error);
    }
  }
  
    componentDidMount() {
      this.getRecipes();
      this.getrecipes()
      
    }
  
  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (<RecipeList
          recipes={this.state.recipes}
          handleDetails={this.handleDetails}
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          error={this.state.error}
        />
        );
      case 0:
        return (<RecipeDetails
          id={this.state.datails_id}
          handleIndex={this.handleIndex}
        />)

    }
  }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    })
  }
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      datails_id: id
    });
  };
  handleChange = (e) => {
    this.setState({
      search:e.target.value
    },()=>{
      console.log(this.state.search);
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {base_url,query,search} = this.state;
    this.setState(()=>{
       return {url:`${base_url}${query}${search}`, search:""}
    },()=>{
      this.getRecipes();
    })
  }
  //
  getrecipes = ()=>{
    fetch('http://localhost:3001/api/recipes')
      .then(response => response.json())
      .then(result => { 
        this.setState({
          recipesArray: result
        })
      }) 
  }
   
    handleTextBoxChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
  addRecipe = () =>{
    const recipe = {
      recipename:this.state.recipename,
      description:this.state.description,
      URLimages:this.state.URLimages
    }
  fetch('http://localhost:3001/user/add-recipe',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(recipe)
  }).then(()=>{
    this.getrecipes()
  })
  }
  
  deleteRecipe = (recipeid) =>{   
  fetch('http://localhost:3001/user/delete-recipe',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({recipeid:recipeid})
  
  }).then(( response)=>{ return response.json() }).then((result)=>{
    console.log(result)
    this.getrecipes()
  
  })
  }
 
 

  
  render() {

    //console.log(this.state.recipes);
    return (
      <React.Fragment>
      <h1 className="add_recipe"> <label className="text-danger">Add Recipe</label> </h1>
      <input name="recipename" type="text" placeholder="Name" onChange={this.handleTextBoxChange} />
      <input name="description" type="text" placeholder="description" onChange={this.handleTextBoxChange} />
      <input name="URLimages" type="text" placeholder="URLimages" onChange={this.handleTextBoxChange} />
       <button onClick={this.addRecipe} >Submit</button>
          
    {  /*  */  }   {this.displayPage(this.state.pageIndex)}   
         <ViewRecipe   recipesArray={this.state.recipesArray} deleteRecipe={this.deleteRecipe} /> 
               

      </React.Fragment>
    );
  }
}
export default App;
