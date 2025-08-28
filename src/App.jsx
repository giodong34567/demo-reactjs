import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// Import các components khác
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Products from "./components/Products";
import TodoList from "./components/Todo-List";
import WeatherApp from "./components/Weather";

function App() {
  return (
    <div>
      {/* <Header />

      <div className="p-6">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div> */}
      {/* <TodoList/> */}
      <WeatherApp/>
    </div>
  );
}

export default App;
