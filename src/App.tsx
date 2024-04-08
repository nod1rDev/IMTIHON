import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import Invoice from "./Pages/Invoice";
import { store } from "./Redux/store";
import Layout from "./Pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Layout />,
      },
      {
        path: "incoice/:id",
        element: <Invoice />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
