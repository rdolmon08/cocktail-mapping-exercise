import { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [cocktail, setCocktail] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => {
        setCocktail(response.data.drinks);
      });
  }, []);

  const info = cocktail.map(
    ({ strDrink: drink, strInstructions: instructions }) => ({
      drink,
      instructions
    })
  );

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div className="App">
      <h1>Margarita Cocktail Recipes</h1>
      {info.map(({ drink, instructions }) => {
        return (
          <span>
            <h3 className="drinkfont">{drink}</h3>
            <h5 className="recipefont">{instructions}</h5>
          </span>
        );
      })}
    </div>
  );
}
