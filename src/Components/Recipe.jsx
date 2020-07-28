import React from "react";
import style from "./recipe.module.css"

function Recipe(props){
    return (
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <ul style={{listStyleType:"none"}}>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{props.calories}</p>
            <img src={props.image} alt="recipe-img"/>
        </div>
    );
}

export default Recipe;