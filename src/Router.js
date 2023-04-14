
import { createBrowserRouter } from '../node_modules/react-router-dom/dist/index';

import About from "./pages/about/components/About";
import ProductList from "./pages/product/ProductList";
import ContactUs from "./pages/contact/components/ContactUs";
import App from "./App";
import NotFound from "./shared/NotFound";
import ProductDetails from './pages/product/ProductDetails';
import Counter from './pages/counter/components/Counter';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // Nesting routes
        children: [
            {
                path: "/",
                element: <ProductList/>,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "contact-us",
                element: <ContactUs/>,
            },
            {
                path: "counter",
                element: <Counter/>,
            },
            {
                path: "product-details/:id", //:id --> variable
                element: <ProductDetails/>,
            },
            
        ],
    },
    {
        // WILD CARD ROUTE
        path: '*',
        element: <NotFound/>,
    },
      
  ]);