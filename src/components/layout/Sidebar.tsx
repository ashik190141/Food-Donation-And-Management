import { Layout, Menu } from "antd";
import { Home, LayoutDashboard, PlusSquare } from "lucide-react";
import { NavLink, Outlet } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

const items = [
  {
    key: "home",
    icon: <Home />,
    label: <NavLink to="/">Home</NavLink>,
  },
  {
    key: "dashboard",
    icon: <LayoutDashboard />,
    label: <NavLink to="/dashboard">Dashboard</NavLink>,
  },
  {
    key: "Add Supply",
    icon: <PlusSquare />,
    label: <NavLink to="/dashboard/create-supply">Add Supply</NavLink>,
  },
];


const Sidebar = () => {
    
    return (
      <div>
        <Layout>
          <Sider breakpoint="lg" collapsedWidth="0">
            <div
              style={{
                textAlign: "center",
                height: "4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="text-orange-400"
            >
              Feed Forward Foundation
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
              items={items}
            />
          </Sider>
          <Layout>
            <Content>
              <div
                style={{
                  minHeight: 360,
                }}
              >
                <Outlet></Outlet>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              FEED FORWARD FOUNDATION ©{new Date().getFullYear()} Created by
              Ahsan Mahmud Ashik
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
};

export default Sidebar;