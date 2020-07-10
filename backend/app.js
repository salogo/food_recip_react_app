const express = require('express')
const app = express() 
const cors = require('cors')
app.use(express.json())
app.use(cors())
const models = require('./models')


app.post('/user/delete-recipe', (req,res) => {
console.log(req.body.recipeid)
    let id = req.body.recipeid
  
    models.Recipe.destroy({
        where: {
            id : id
        }
    }).then((response)=>{
       console.log(response)
    }).then(()=>{
        res.send({message:"recipe deleted"})
    })
 
  })

app.get("/api/recipes",async (req,res) =>{
   let recipes = await models.Recipe.findAll(
       
   )
  // console.log(recipes)
  res.send(recipes)
})

app.post("/user/add-recipe",async (req,res) => {
    console.log(req.body)
    let recipename = req.body.recipename
    let description = req.body.description
    let URLimages = req.body.URLimages


    let recipe = await models.Recipe.build({
        recipename:recipename,
        description:description,
        URLimages:URLimages

    })
    await recipe.save()
res.send()

})


app.listen(3001, () => {
    console.log('Server is running...')
})