import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import Mainlayout from './layouts/mainlayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import MovieDetails from './pages/MovieDetails';
import { store } from './Store/Appstore';
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
                        path:"MovieDetails/:id",
                        element:<MovieDetails/>
                    },
        ]

    }
])

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
            <RouterProvider router={Router}/>

    </Provider>


);
