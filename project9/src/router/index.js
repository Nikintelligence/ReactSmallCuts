import About from "../pages/About";
import Error from "../pages/Error";
import ItemIdPage from "../pages/ItemIdPage";
import Items from "../pages/Items";

export const routes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/items', element: <Items/>, exact: true},
    {path: '/items/:itemId', element: <ItemIdPage/>, exact: true},
    {path: '*', element: <Error/>, exact: true}
]