import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div>This is dashboard</div>
      <div className="container">
        <div className="leftMenu">
          <ul>
            <li>
              <Link to="content1">Content1</Link>
            </li>
            <li>
              <Link to="content2">Content2</Link>
            </li>
          </ul>
        </div>
        <div className="rightMenu">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
