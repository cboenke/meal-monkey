import "./card.css";
import icecream from "./card-icecream.html";
import cake from "./card-cake.html";
import pancake from "./card-pancake.html";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Icecream = () => icecream;
export const Cake = () => cake;
export const Pancake = () => pancake;
