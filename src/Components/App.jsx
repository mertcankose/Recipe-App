import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

/*
//useEffect, sayfa her render edildiğinde çalışır.
useEffect(()=>{
    console.log("Effect has been run!");
},[]); //sadece ilk yükleme sonrasında çalışması için [] bunu ekledik. sadece tek bir state değiştiğinde çalışması için ex. [counter]  içine state'i eklemeliyiz.
*/


function App() {
    const APP_ID = process.env.REACT_APP_RECIPE_APP_ID;
    const APP_KEY = process.env.REACT_APP_RECIPE_APP_KEY;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [finishSearch, setFinishSearch2] = useState('banana');

    useEffect(() => {
        getRecipes();
    }, [finishSearch]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${finishSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setFinishSearch2(search);
        setSearch('');
    }

    return (
        <div className="App">
            <form onSubmit={handleClick} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={handleChange} />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes">
                {recipes.map((recipe, index) => (
                    <Recipe
                        key={index}
                        id={index}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
}


export default App;