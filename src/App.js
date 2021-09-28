import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Cryptocurrencies,
  CryptoDetail,
  Exchanges,
  Homepage,
  News,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              >
              <Route exact path="/Exchanges">
                <Exchanges />
              </Route>
              <Route path="/Cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route path="/Cryptos/:coinId">
                <CryptoDetail />
              </Route>
              <Route path="/News">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoerser <br />
            All right reserser
          </Typography.Title>
          <Space>
            <Link to={"/"}>Home</Link>
            <Link to={"/Exchanges"}>Exchanges</Link>
            <Link to={"/News"}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
