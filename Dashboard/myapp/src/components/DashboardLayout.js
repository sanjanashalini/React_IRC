
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
      <aside>
        <h3>Side Panel</h3>
        <ul>
          <li><Link to="/dashboard">Option 1</Link></li>
          <li><Link to="/dashboard">Option 2</Link></li>
          <li><Link to="/dashboard">Option 3</Link></li>
        </ul>
      </aside>
      <div className="main-content">{children}</div>
      <footer>
        <Link to="/">Logout</Link>
      </footer>
    </div>
  );
};

export default DashboardLayout;
