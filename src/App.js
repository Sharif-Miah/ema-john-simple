
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shop from './component/Shops/Shops.jsx'
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import About from './component/About/About';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Shop />
        },
        {
          path: 'shop',
          element: <Shop />
        },
        {
          path: 'order',
          loader: () => fetch('products.json'),
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
