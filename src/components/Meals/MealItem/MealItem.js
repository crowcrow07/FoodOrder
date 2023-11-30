import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

export default function MealItem({ id, name, description, price }) {
  const dollar = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{dollar}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}
