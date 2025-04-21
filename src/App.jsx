import { createHashRouter, RouterProvider } from "react-router-dom";
import "../src/Components/common/StyledCard.css"
import "./App.css";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import MainCategories from './Components/Home/MainCategories';
import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';

function App() {
  // Router configuration
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainCategories /> },
        { path: "home", element: <MainCategories /> },

        // ✅ Route for viewing subcategories of a main category
        { path: "category/:mainCategoryId", element: <CategoryList /> },

        // ✅ Route for viewing products of a subcategory
        { path: "subcategory/:subcategoryId", element: <ProductList /> },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
