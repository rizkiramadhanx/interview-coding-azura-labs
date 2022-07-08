import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="btn btn-ghost normal-case text-xl">
            Interview Azura Labs
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <div>
                <Link to="/one"> No 1</Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/two"> No 2</Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/three"> No 3</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-7">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
