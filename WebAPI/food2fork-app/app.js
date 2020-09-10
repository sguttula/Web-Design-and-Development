const
    foods = require('foodModules'),
    inquirer = require('inquirer')

async function list(result) {
    const displayRecipe = result.map(recipe => {
        return { name: recipe.title, value: recipe.recipe_id }
    })
    return inquirer.prompt([{
        type: 'list',
        message: 'select recipe to view',
        name: 'recipeid',
        choices: displayRecipe,
    }])
}

const print = (recip) => {
   console.log()
   console.log("Title: " + recip.title)
   console.log()
   console.log("Recipe ID: " + recip.recipe_id)
   console.log()
   console.log("Ingredients: ")
   recip.ingredients.forEach(i => console.log(i))
   console.log()
   console.log("Recipe Link: " + recip.f2f_url)
   console.log()
   console.log("Publisher: " + recip.publisher)
   console.log()
   console.log("Publisher Link: " + recip.publisher_url)
}


async function search(query) {
    const searchresult = await foods.search(query);
	const userchoice = await list(searchresult.recipes)
	const getresult = await foods.get(userchoice.recipeid)
	print(getresult.recipe)
}

module.exports = {
	search
}
