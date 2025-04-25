const router = require('express').Router()
const recipes = require('../../../data/recipes.json')

//Viewing recipe overviews
router.get('/', (request, response) => {
    const previewRecipe = recipes.map(({ id, title, image, prepTime, difficulty }) => ({
        id, title, image, prepTime, difficulty}))
        response.json(previewRecipe)
}) 

//Adding new recipe
router.post('/recipe/add', (request, response) => {
    const { id, title, image, ingredients, instructions, prepTime, difficulty } = request.body
    console.log({ id, title, image, ingredients, instructions, prepTime, difficulty })
}) 

//Searching recipe by ID
router.get('/recipe/:id', (request, response) => {
    const { id } = request.params
    const getRecipe = recipes.find(r => r.id.toString() === id)
    if (getRecipe) response.send(getRecipe)
        else response.send({ error: {message: 'Could not find a recipe with id: ${id}'}})
}) 

module.exports = router