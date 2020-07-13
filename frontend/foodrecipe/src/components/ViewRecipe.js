
import React from 'react'
import '../index.css'


function Viewrecipe(props) {


   let recipeItems = props.recipesArray.map((recipe, index) => {



      return <div key={index} className="img-card-top  myrecipe d-inline-flex   col-10 mx-auto col-md-6 col-lg-4 my-3" >

         <div key={index} className="card">

            <div>
               <div>
                  <p><img  src={recipe.URLimages} style={{ height: "14rem",width: "25rem"}} alt="recipe" /> </p>
                  <p><button type="button" 
                     className="btn btn-danger "
                     onClick={() => { props.deleteRecipe(recipe.id) }}>
                     Delete</button>
                  </p>
                  <p><b>Recipe Name : </b>{recipe.recipename} </p>
                  <p>  <b>Details: </b>{recipe.description}  </p>
               </div>
            </div>
         </div>
      </div>

   })




   return <div>

      <ul>  {recipeItems} </ul>
   </div>

}

export default Viewrecipe;





/*

good

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

*/