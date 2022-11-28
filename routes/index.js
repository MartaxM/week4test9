var express = require("express");
var router = express.Router();
let recipes = [];
let recipe;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Recipe app" });
});

router.get("/recipe/:food", (req, res) => {
  let food = {
    name: req.params.food,
    instructions: ["ADJJd"],
    ingredients: ["ADJJd"]
  };
  recipes.push(food);
  recipe = food;
  console.log(recipe);
  res.json(food);
});

router.get("/:recipe", (req, res) => {
  let ind = -1;
  ind = searchRecipe(req.params.recipe);
  if (ind != -1) {
    let food = recipes[ind];
    res.render("recipe", {
      name: food.name,
      ing: food.ingredients,
      ins: food.instructions
    });
  }
});

router.get("/recipe", (req, res) => {
  res.render("recipe", {
    name: food.name,
    ing: food.ingredients,
    ins: food.instructions
  });
});

function searchRecipe(name) {
  let ind = -1;
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name == name) {
      ind = i;
    }
  }
  return ind;
}

module.exports = router;
