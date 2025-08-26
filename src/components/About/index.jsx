import { useState, useEffect, useRef, useReducer } from "react";
import { Sun, Moon } from "lucide-react";


function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
}

function About() {
  const [likes, setLikes] = useState(0);

  // đếm số lần render = useRef
  const renderCount = useRef(0);

  const [theme, dispatch] = useReducer(themeReducer, "light");

  useEffect(() => {
    if (likes > 0) {
      console.log(`Bạn vừa like ${likes} lần`);
    }
  }, [likes]);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-100"
      }`}
    >
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">About Me</h1>
          <button
            onClick={() => dispatch({ type: "TOGGLE" })}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex items-center gap-6 mb-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="avatar"
            className="w-24 h-24 rounded-full shadow-md"
          />
          <div>
            <h2 className="text-xl font-semibold">Phạm Thế Anh</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Lập trình viên Fullstack, yêu thích React & Odoo.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Mục tiêu: Xây dựng những ứng dụng web hiện đại, mượt mà và dễ sử dụng.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-6">
          <span className="text-lg">👍 Số lượt like: {likes}</span>
          <button
            onClick={() => setLikes(likes + 1)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            Thả Like
          </button>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          (Trang này đã render <span className="font-medium">{renderCount.current}</span> lần)
        </p>
      </div>
    </div>
  );
}

export default About;
