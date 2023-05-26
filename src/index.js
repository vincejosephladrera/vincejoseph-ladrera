// index.js

import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./app";
import tailwind from "./index.css";

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
