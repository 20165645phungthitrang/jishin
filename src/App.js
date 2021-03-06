// import logo from './logo.svg';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import { HomeOutlined, NotificationOutlined } from "@ant-design/icons";
import { Layout, Menu, Table } from "antd";

import "antd/dist/antd.css";
import './App.css';
import ShelterPage from './container/ShelterInfo';
import LogPage from './container/LogPage';
const { Sider } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Switch>
          <Route path="/">
            <Layout>
              <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                  console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
                }}
              >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/">地震情報</Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<NotificationOutlined />}>
                    <Link to="/shelter">避難所情報</Link>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Route exact path="/">
                  <LogPage />
                </Route>
                <Route exact path="/shelter">
                  <ShelterPage />
                </Route>
              </Layout>
            </Layout>
          </Route>
        </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
