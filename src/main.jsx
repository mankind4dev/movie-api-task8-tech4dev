 
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import {store} from "./redux/store.js"
import { Provider } from "react-redux";
import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org/3"
// axios.defaults.headers.common["Authorization"] = `Bearer ${import.meta.process.env.REACT_APP_API_HEADER}`;
 

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
