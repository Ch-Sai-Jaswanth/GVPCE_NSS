import React from "react";
import ReactDOM from "react-dom";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

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
