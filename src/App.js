
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shop from './component/Shops/Shops.jsx'
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import About from './component/About/About';
import { productAndCardLoder } from './loders/productAndCardLoder';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop />
        },
        {
          path: 'shop',
          loader: () => fetch('products.json'),
          element: <Shop />
        },
        {
          path: 'order',
          loader: productAndCardLoder,
          element: <Order />
        },
        {
          path: 'inventory',
          element: <Inventory />
        },
        {
          path: 'about',
          element: <About />
        }
      ],
    },
    {
      path: '*',
      element: <h1> This is NOT Found Your Search 404.</h1>
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
