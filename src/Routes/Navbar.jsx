import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const taskServer = process.env.REACT_APP_ENDPOINT;
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-todo">Add Task</Link>
      </nav>
      <Outlet context={taskServer} />
    </>
  );
};

export default Navbar;
