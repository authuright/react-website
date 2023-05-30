import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import CoursePage from "./components/page/CoursePage";
import LogIn from "./components/login";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
