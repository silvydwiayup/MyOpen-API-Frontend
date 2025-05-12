import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import MainLayout from "./layouts/MainLayout";
import Create_Project from './pages/create_project/Create_Project';
import ListProject from './pages/list-project/List_Project';
import ListTable from './pages/list-table/List_Table';
import List_Notification from './pages/list_notification/List_Notification';
import ListObject from './pages/list-object/LIst_Objects';
import Information from './pages/public/information/Information';
import Profile from './pages/profile/Profile';

function App() {
  
  return (
    <Router>
            <Routes>
                <Route
                    path="/information"
                    element={
                            <Information />
                    }
                />
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Dashboard />
                        </MainLayout>
                    }
                />
                <Route
                  path="/create-project"
                  element={
                    <MainLayout>
                      <Create_Project />
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
                <Route
                  path="/projects/list-table"
                  element={
                      <MainLayout>
                          <ListTable />
                      </MainLayout>
                  }
                />
                <Route
                  path="/list-notification"
                  element={
                      <MainLayout>
                          <List_Notification />
                      </MainLayout>
                  }
                />
                <Route
                  path="/table/list-object/:name"
                  element={
                    <MainLayout>
                      <ListObject />
                    </MainLayout>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <MainLayout>
                      <Profile />
                    </MainLayout>
                  }
                />
                
            </Routes>
        </Router>
  )
}

export default App
