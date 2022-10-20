import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ setIsLogin, list }) => {
  const navigate = useNavigate();

  const logoutClick = () => {
    localStorage.clear();
    navigate("/");
    setIsLogin(false);
  };

  return (
    <div>
      <ul>
        {list.map((list) => {
          return (
            <li key={list.id}>
              <Link to="/List" state={{ list }}>
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div onClick={logoutClick}>로그아웃</div>
    </div>
  );
};

export default Header;
