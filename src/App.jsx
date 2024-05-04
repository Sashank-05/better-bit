import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from "react-dom/client";
import MainContent from "./Components/main-content/MainContent";
import Workspace from "./Components/workspace/workspace"; // Capitalized component name




export default function App() {
    const root = ReactDOM.createRoot(document.getElementById("root"))
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainContent/>,
        },
        {
            path: "workspace",
            element: <Workspace/>,
        },
    ]);

    root.render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
}
