import { createHashRouter, RouterProvider } from "react-router-dom";
import "../src/Components/common/StyledCard.css"
import "./App.css";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import MainCategories from './Components/Home/MainCategories';
import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';
import TypesOfSand from "./Components/Sand/TypesOfSand";
import MSand from './Components/Sand/MSand';
import SmoothySand from './Components/Sand/SmoothySand';
import RoughSand from "./Components/Sand/RoughSand";

function App() {
  // Router configuration
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainCategories /> },
        { path: "/home", element: <MainCategories /> },

        
        { path: "category/:mainCategoryId", element: <CategoryList /> },

        
        { path: "subcategory/:subcategoryId", element: <ProductList /> },
        { path: "/category/sand", element: <TypesOfSand /> },
        { path: "/category/sand/msand", element: <MSand /> },
        { path: "/category/sand/msand/smooth-sand", element: <SmoothySand /> },
        { path: "/category/sand/msand/rough-sand", element: <RoughSand /> },
        { path: "/category/sand/natural-sand", element: <naturalSand /> },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
