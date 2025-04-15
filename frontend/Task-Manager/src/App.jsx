import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Private
import PrivateRoute from "./routes/PrivateRoutes";

// Auth
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

// Admin
import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";

// User
import UserDashboard from "./pages/User/UserDashboard";
import MyTasks from "./pages/User/MyTasks";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/adim/dashboard" element={<Dashboard />} />
            <Route path="/adim/task" element={<ManageTasks />} />
            <Route path="/adim/create-task" element={<CreateTask />} />
            <Route path="/adim/user" element={<ManageUsers />} />
          </Route>

          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/my-tasks" element={<MyTasks />} />
            <Route
              path="/user/tasks-details/:id"
              element={<ViewTaskDetails />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
