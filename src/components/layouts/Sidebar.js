// src/components/layouts/Sidebar.js
const Sidebar = () => {
    return (
      <aside style={sidebarStyle}>
        <h2>Categories</h2>
        <ul>
          <li>Action</li>
          <li>Drama</li>
          <li>Comedy</li>
          <li>Horror</li>
        </ul>
      </aside>
    );
  };
  
  const sidebarStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    width: '250px',
  };
  
  export default Sidebar;
  