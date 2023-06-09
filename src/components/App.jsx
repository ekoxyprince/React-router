import About from './about';
import Home from './home'
import NavBar from './nav';
import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import NotFound from './notfound';
import Product from './product';
import FeaturedProduct from './featured';
import NewProduct from './new';
import Users from './users';
import UserDetails from './details';

function App(){
    return(
        <div>
            <NavBar/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/product' element={<Product/>}>
                <Route index element={<FeaturedProduct/>}/>
                <Route path='featured' element={<FeaturedProduct/>}/>
                <Route path='new' element={<NewProduct/>}/>
            </Route>
            <Route path='/users' element={<Users/>}>
            <Route path=':id' element={<UserDetails/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default App