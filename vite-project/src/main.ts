import { createApp } from "vue";
import "./style.css";
import "./assets/css/reset.scss";
import Card from "./components/Card/Card.vue";
import App from "./App.vue";

createApp(App).component('Card', Card).mount("#app");
