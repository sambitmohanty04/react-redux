import React from 'react';
import '../assets/sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='fs-5'>Blog</div>
      <ul className="sidebar-menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;