import Toolbar from "./Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home.tsx";
import Contacts from "./Contacts/Contacts.tsx";
import About from "./About/About.tsx";
import AddPost from "./AddPost/AddPost.tsx";

const App = () => {

  return (
      <>
          <header className="App-header"><Toolbar/></header>

          <main className="container-fluid">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/contacts" element={<Contacts/>}/>
                  <Route path="/about-us" element={<About/>}/>
                  <Route path="/add-posts" element={<AddPost/>} />
                  <Route path="*" element={<h1>Not found!</h1>}/>
              </Routes>
          </main>
      </>
  )
};

export default App
