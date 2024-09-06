// src/components/layouts/Layout.js
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={layoutStyle}>
        <Sidebar />
        <main style={mainContentStyle}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

const layoutStyle = {
  display: 'flex',
};

const mainContentStyle = {
  flex: 1,
  padding: '20px',
};

export default Layout;
