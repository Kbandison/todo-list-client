import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import TodoForm from "./Routes/TodoForm";
import TodoList from "./Routes/TodoUpdate";
import Navbar from "./Routes/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/add-todo" element={<TodoForm />} />
            <Route path="/update-todo" element={<TodoList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
