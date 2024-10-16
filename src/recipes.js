
import greeksalad from "../images/greek salad.jpg";
import bruchetta from "../images/Bruchetta.png";
import lemonDessert from "../images/desert.jpg";
const recipes = [
    {
      id: 1,
      title: "Greek salad",
      price: 12.99,
      image: {greeksalad},
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      id: 2,
      title: "Bruchetta",
      price: 5.99,
      image: {bruchetta},
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: 4.78,
      image: {lemonDessert},
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },

  ];

  export default recipes;