import {Route, BrowserRouter, Switch} from "react-router-dom";
import {lazy, Suspense} from "react";
import Loader from "../components/loader";
import {PublicRoute} from "./config";

const Home = lazy(() => import('../pages/home'));
const Product = lazy(() => import('../pages/product'));
const Login = lazy(() => import('../pages/auth/login'));
const UserProfile = lazy(() => import('../pages/userProfile'));
const NotFound = lazy(() => import('../pages/notFound'));
const MovieProfile = lazy(() => import('../pages/movieProfile'));
const MovieGenre = lazy(() => import('../pages/movieGenre'));
const TopRated = lazy(() => import('../pages/topRated'));
const Popular = lazy(() => import('../pages/popular'));


const MainRouter=()=>{
    const isLogin = () =>{
        const token = localStorage.getItem('currentUser')
       ? JSON.parse(localStorage.getItem('currentUser')).token : '';
       if(token) {
           return true;
       } else {
           return false;
       }
    } 

    return(
        <BrowserRouter>
            <Suspense fallback={<Loader/>}>
                <Switch>
                    <PublicRoute path='/' exact isLogin={isLogin()}> 
                        <Home />
                    </PublicRoute>
                    <PublicRoute path='/product' exact isLogin={isLogin()}>
                        <Product />
                    </PublicRoute>
                    <PublicRoute path='/login' exact isLogin={isLogin()} restricted={true}>
                        <Login />
                    </PublicRoute>
                    <PublicRoute path='/user-profile' exact isLogin={isLogin()}>
                        <UserProfile />
                    </PublicRoute>
                    <PublicRoute path='/movie-profile/:id' exact isLogin={isLogin()}>
                        <MovieProfile />
                    </PublicRoute>
                    <PublicRoute path='/genre/:name/:id' exact isLogin={isLogin()}>
                        <MovieGenre />
                    </PublicRoute>
                    <PublicRoute path='/top-rated' exact isLogin={isLogin()}>
                        <TopRated />
                    </PublicRoute>
                    <PublicRoute path='/popular' exact isLogin={isLogin()}>
                        <Popular />
                    </PublicRoute>
                    <PublicRoute path='/user-profile' exact isLogin={isLogin()}>
                        <UserProfile />
                    </PublicRoute>
                    <Route path='*'>
                        <NotFound/>
                    </Route>
                </Switch>
            </Suspense>    
        </BrowserRouter>
    )
}

export default MainRouter;