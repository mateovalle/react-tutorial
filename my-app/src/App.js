import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profiles from "./pages/Profiles";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar/Navbar";
import PostsPage from"./pages/PostsPage"
import TagPage from "./pages/TagPage";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <BrowserRouter>
        <ScrollToTop>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path="/posts/:id" element={<PostsPage />} />
                <Route path="/tag/:tag" element={<TagPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
