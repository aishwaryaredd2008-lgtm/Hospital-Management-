import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { RoutineProvider } from "./context/RoutineContext";
import ErrorBoundary from "./components/ErrorBoundary";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AllRoutines from "./pages/AllRoutines";
import CompletedRoutines from "./pages/CompletedRoutines";
import RoutineDetails from "./pages/RoutineDetails";

function App() {
  return (
    <ErrorBoundary>
      <RoutineProvider>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<AllRoutines />} />
              <Route path="completed" element={<CompletedRoutines />} />
              <Route path="routine/:id" element={<RoutineDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RoutineProvider>
    </ErrorBoundary>
  );
}

export default App;