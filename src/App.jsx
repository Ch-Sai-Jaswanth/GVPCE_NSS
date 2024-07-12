import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";
import Team from "./components/Team";
import Events from "./components/Events";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        name: "/",
        element: <Body />,
      },
      {
        name: "/about",
        element: <About />,
      },
      {
        name: "/contact",
        element: <Contact />,
      },
      {
        name: "/gallery",
        element: <Gallery />,
      },
      {
        name: "/events",
        element: <Events />,
      },
      {
        name: "/team",
        element: <Team />,
      },
    ],
    errorElement : <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
