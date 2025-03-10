import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
