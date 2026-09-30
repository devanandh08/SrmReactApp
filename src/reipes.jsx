import React from 'react';
function Recipes() {
    var [recipes, setRecipes] = React.useState([]);
    var [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then(res => res.json())
            .then(data => setRecipes(data.recipes));
    }, []);

    function nextImg() {
        setIndex(i => (i + 1) % recipes.length);
    }

    function prevImg() {
        setIndex(i => (i - 1 + recipes.length) % recipes.length);
    }

    if (recipes.length === 0) {
        return <h2>Loading...</h2>;
    }

    var recipe = recipes[index];

    return (
        <div id="rs">
            <h1>Recipes</h1>

            <div>
                <b>{recipe.name}</b>
                <br />
                <img src={recipe.image} alt={recipe.name} />
                <p>{recipe.instructions.join(" ")}</p>

                <button onClick={prevImg}>Prev</button>
                <button onClick={nextImg}>Next</button>
            </div>
        </div>
    );
}
export default Recipes;