import {
  UsergroupAddOutlined,
  UserSwitchOutlined,
    PieChartOutlined,
    StepForwardOutlined,
    StarOutlined,
    UserOutlined,
    
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
// import Link from "antd/es/typography/Link";
import { useState } from "react";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link className="no-underline" to="/">Analytics</Link>, "1", <PieChartOutlined />),

  getItem("Provider", "sub1", <UsergroupAddOutlined />, [
    getItem(<Link className="no-underline" to="/View">Provider</Link>, "5", <UserOutlined />),
    getItem(<Link className="no-underline" to="/Business">Business / Agency</Link>, "6", <UserOutlined />),
    getItem(<Link className="no-underline" to="/User">User</Link>, "7", <UserOutlined />),
    
  ]),
  getItem(<Link className="no-underline" to="/Useractivity">User Activity</Link>, "8",<UserSwitchOutlined />),
  getItem(<Link className="no-underline" to="/Feedback">Review & Feedback</Link>, "9", <StarOutlined />),

 
 
];
const Sidbarmenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
            
      }}
    >
     
      <Menu
        defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
      
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default Sidbarmenu;
