import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import Mainlayout from './layouts/mainlayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import { store, Store } from './Store/Appstore';
import { Provider } from 'react-redux';
const Router=createBrowserRouter([
    {
path:'/',
element:<Mainlayout/>,
        children:[
                    {
                        index:true,
                        element:<Home/>
                    },
                    {
                        path:"Catalog",
                        element:<Catalog/>
                    },
                    {
                        path:"Detail",
                        element:<Detail/>
                    },
        ]

    }
])

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
            <RouterProvider router={Router}/>

    </Provider>


);
