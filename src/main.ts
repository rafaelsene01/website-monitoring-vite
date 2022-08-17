import { createApp } from "vue";
import { Quasar } from "quasar";
import "./style.css";
import App from "./App.vue";

import "quasar/src/css/index.sass";
import "@/assets/css/index.scss";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
