import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import Stones from './Components/Products/Stones/Stones';




function App() {
  
  // Router configuration
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout  />,
      children: [
        { index: true, element: <Home /> },
      


        {
          path: "home",
          element: (
            
              <Home />
            
          ),
        },
        {
          path: "/products/stones",
          element: (
            
              <Stones />
            
          ),
        },
        
        
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;