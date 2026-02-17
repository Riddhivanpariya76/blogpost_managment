import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Createpost from "./pages/Createpost";
import AuthGuard from "./auth/Authguard";
import Analytics from "./pages/Analytics";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-post" element={<Createpost/>}/>
        <Route path="/edit-post/:id" element={<AuthGuard>
          <Createpost/>
        </AuthGuard>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/post-details/:id" element={<PostDetails/>}/>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
