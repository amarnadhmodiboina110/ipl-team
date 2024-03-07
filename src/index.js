// Import necessary dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Store/store";

// Get the root HTML element with the id "root" from the DOM.
const rootElement = document.getElementById("root");
// Create a new React root.
const root = createRoot(rootElement);

// Render the main React component, App, within a StrictMode and wrapped by a Redux Provider.
root.render(
    <StrictMode>
        <Provider store={store}>
                <App />
        </Provider>
    </StrictMode>
);
