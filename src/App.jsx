import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import MainLayout from "./layouts/MainLayout";
import ListProject from './pages/list-project/List_Project';

function App() {
  
  return (
    <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Dashboard />
                        </MainLayout>
                    }
                />
                <Route
                    path="/projects/list"
                    element={
                        <MainLayout>
                            <ListProject />
                        </MainLayout>
                    }
                />
            </Routes>
        </Router>
  )
}

export default App
