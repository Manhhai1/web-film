// src/components/layouts/Layout.js
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
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
