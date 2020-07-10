
import React from 'react'
import '../index.css'


function Viewrecipe(props) {


   let recipeItems = props.recipesArray.map((recipe, index) => {
      return <div key={index} >
       
         <div className="col-10 mx-auto col-md-6 col-lg-4 my-3 " >
         <div className="card">
           <img src={recipe.URLimages}
             className="img-card-top"
             style={{ height: "14rem" }}
             alt="images" />
             <button onClick={() => { props.deleteRecipe(recipe.id) }}>Delete</button>
             <b>Recipe Name : </b>{recipe.recipename} <b>Description : </b>{recipe.description}
         </div>
       </div>


      </div>
   })




   return <div>

      <ul>  {recipeItems} </ul>
   </div>

}
export default Viewrecipe;

