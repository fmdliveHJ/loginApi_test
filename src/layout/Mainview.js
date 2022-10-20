import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/login/Login";

import List from "../pages/list/List";
import axios from "axios";
import Home from "../pages/home/Home";
import Header from "../components/header/Header";

const Mainview = () => {
  const severApi = process.env.REACT_APP_HOME_URL;
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [duplicate, setDuplicate] = useState(false);

  const [phoneNum, setPhoneNum] = useState([]);
  const [positions, setPositions] = useState(true);
  const navigate = useNavigate();

  const [positionInfo, setPositionInfo] = useState([
    { value: "1", position: "연구원" },
    { value: "2", position: "주임연구원" },
    { value: "3", position: "선임연구원" },
  ]);

  const [selected, setSelected] = useState(positionInfo[0].label);
  const [list, setList] = useState([
    { name: "배인섭", position: "주임연구원", phone: "01011111111", id: 1 },
    { name: "도창록", position: "연구원", phone: "01022222222", id: 2 },
    { name: "강세규", position: "선임연구원", phone: "01033333333", id: 3 },
    { name: "정현진", position: "연구원", phone: "01044444444", id: 4 },
  ]);

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    const requestUrl = `${severApi}:9002/login`;
    const body = {
      id: loginId,
      password: password,
    };
    console.log(requestUrl);

    axios.post(requestUrl, body).then((res) => {
      console.log("res", res);
      if (res.data.user.id) {
        navigate("/home");
        setIsLogin(true);
        localStorage.setItem("id", res.data.user.id);
      }
    });
  };
  const idChange = (e) => {
    setLoginId(e.target.value);
    console.log("loginId", loginId);

    const duplicateUrl = `${severApi}:9002/users/duplicate/${loginId}`;
    const body = {
      id: loginId,
      password: password,
    };

    axios.get(duplicateUrl, body).then((duplicate) => {
      console.log("duplicate", duplicate);
      if (duplicate.data.status === true) {
        setDuplicate(true);
      }
    });
  };
  const pwChange = (e) => {
    setPassword(e.target.value);
    console.log("password", password);
  };

  return (
    <>
      {isLogin || localStorage.getItem("id") ? (
        <div className="contents">
          <div className="header">
            <Header setIsLogin={setIsLogin} list={list} />
          </div>
          <div className="content">
            <Routes>
              <Route index path="/home" element={<Home />} />
              <Route
                path="/List"
                element={
                  <List
                    list={list}
                    setList={setList}
                    selected={selected}
                    setSelected={setSelected}
                    positions={positions}
                    phoneNum={phoneNum}
                    setPhoneNum={setPhoneNum}
                    setPositions={setPositions}
                    positionInfo={positionInfo}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Login
                loginId={loginId}
                password={password}
                setLoginId={setLoginId}
                setPassword={setPassword}
                loginSubmit={loginSubmit}
                idChange={idChange}
                pwChange={pwChange}
                duplicate={duplicate}
              />
            }
          />
          {/* <Route path="/Join" elment={<Join />} /> */}
        </Routes>
      )}
    </>
  );
};

export default Mainview;
