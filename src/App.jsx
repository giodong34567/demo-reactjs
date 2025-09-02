import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import SkillDetail from "./components/Skills/SkillDetail";
import Contact from "./components/Contact";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills">
            <Route index element={<Skills />} />
            <Route path=":id" element={<SkillDetail />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
