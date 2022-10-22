import './App.css';
import {BrowserRouter, Route, Routes, Outlet, Navigate} from "react-router-dom";
import Profiles from "./pages/ProfilesPage/Profiles.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import PostsPage from "./pages/PostsPage/PostsPage.tsx"
import TagPage from "./pages/TagPage/TagPage.tsx";
import ScrollToTop from "./ScrollToTop";
import Search from "./pages/SearchPage/Search.tsx";
import LoginPage from './pages/LoginPage/LoginPage.tsx'
import {useSelector} from "react-redux";
import ResponsiveAppBar from "./components/appBar/AppBar.tsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.tsx";
import {State} from "./Redux/store";




const App = () => {
    const  token = useSelector((state: State) => {return state.session.token})
    const Auth = () => token != '' ? <Outlet /> : <Navigate to={'/'} />;

  return (
    <BrowserRouter>
            <ResponsiveAppBar />
            <ScrollToTop>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signUp" element={<SignUpPage />} />
                <Route element={<Auth />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profiles" element={<Profiles />} />
                    <Route path="/posts/:id" element={<PostsPage />} />
                    <Route path="/tag/:tag" element={<TagPage />} />
                    <Route path="/search" element={<Search />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
