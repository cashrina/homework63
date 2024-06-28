import Toolbar from "./components/Toolbar/Toolbar.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import About from "./components/About/About.tsx";
import AddPost from "./components/AddPost/AddPost.tsx";
import Post from "./container/Post.tsx";

const App = () => {
    return (
        <>
            <header className="App-header mx-5 my-4">
                <Toolbar />
            </header>

            <main className="container-fluid">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path={'/posts/:postId'} element={<Post/>}/>
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/add-posts" element={<AddPost />} />
                    <Route path="/posts/:id/edit" element={<AddPost />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
            </main>
        </>
    );
};

export default App;

