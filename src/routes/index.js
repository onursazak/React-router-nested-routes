import { Routes, Route, Outlet, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import NoMatch from "../components/NoMatch";
import About from "../components/About";
import Dashboard from "../components/Dashboard";
import Content1 from "../components/Dashboard/Content1";
import Content2 from "../components/Dashboard/Content2";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="content1" element={<Content1 />}></Route>
          <Route path="content2" element={<Content2 />}></Route>
        </Route>
        <Route path="nothing-here" element={<div>nothing</div>} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default Router;
