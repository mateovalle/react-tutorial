import './App.css';
import {BrowserRouter, Route, Routes, Outlet, Navigate} from "react-router-dom";
import LoginPage from './components/loginPage/LoginPage.tsx';
import SignUpPage from "./components/signupPage/SignUpPage.tsx";
import NavBar from "./components/navBar/NavBar.tsx";
import NewPostInput from "./components/newPostPage/NewPostInput.tsx";
import MyProfilePage from "./components/myProfilePage/MyProfilePage.tsx";


const Auth = () => window.localStorage.getItem('token') ? <Outlet /> : <Navigate to={'/'} />;

const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
        <Route element={<Auth />}>
            <Route path='/Post' element={<NewPostInput />} />
            <Route path='/myProfile' element={<MyProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
