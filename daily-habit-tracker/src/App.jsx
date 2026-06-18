import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider, useData } from "./Store";
import ErrorBoundary from "./ErrorBoundary";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddHabit from "./pages/AddHabit";
import Details from "./pages/Details";
import Progress from "./pages/Progress";

function Protect({ children }) {
  const { user } = useData();
  return user ? children : <Login />;
}

function Nav() {
  const { user, logout } = useData();
  return (
    <nav>
      <Link to="/">Login</Link>
      {user && <Link to="/dash">Dashboard</Link>}
      {user && <Link to="/add">Add</Link>}
      {user && <Link to="/progress">Progress</Link>}
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Nav />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dash" element={<Protect><Dashboard /></Protect>} />
            <Route path="/add" element={<Protect><AddHabit /></Protect>} />
            <Route path="/habit/:id" element={<Protect><Details /></Protect>} />
            <Route path="/progress" element={<Protect><Progress /></Protect>} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}