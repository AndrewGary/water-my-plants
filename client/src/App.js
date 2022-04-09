import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignUpForm from "./components/SignUpForm";
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import LoginForm from './components/LoginForm'
function App() {
  return (
    <div className="background">
      <Header />
      <div className="registerContainer">
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/' element={<SignUpForm />} />
          <Route path ='/login' element={<LoginForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
