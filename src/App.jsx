import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from "react-dom/client";
import MainContent from "./Components/main-content/MainContent";
import WorkspaceExp from "./Components/workspace/workspace";


export default function App() {
    const root = ReactDOM.createRoot(document.getElementById("root"))
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainContent/>,
        },
        {
            path: "workspace",
            element: <WorkspaceExp/>,
        },
    ]);

    root.render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
}
