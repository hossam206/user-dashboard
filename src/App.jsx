import Header from "./Components/Header";
import UserDetails from "./Components/UserDetails";
import UserList from "./Components/UserList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <UserList />,
        },
        {
          path: "/UserDetails/:id",
          element: <UserDetails />,
        },
        // Add more routes as needed
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
