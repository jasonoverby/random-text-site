import Header from './Header';

const layoutStyle = {
  backgroundColor: 'aliceblue',
  fontFamily: 'Helvetica, sans-serif',
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = ({ children }: { children: any }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
);

export default Layout;
