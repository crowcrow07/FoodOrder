import mealsImage from "../../assets/meals.jpg";

export default function Header() {
  return (
    <>
      <header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="mealsHeaderImage" />
      </div>
    </>
  );
}
