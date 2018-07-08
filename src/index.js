// index.web.js
import React from "react";
import { AppRegistry } from "react-native";

import App from "./components/App";

// register the app
AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("react-app")
});

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
