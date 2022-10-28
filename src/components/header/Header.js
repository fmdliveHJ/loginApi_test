import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ setIsLogin }) => {
  const [listHeader, setListHeader] = useState([
    { name: "배인섭", id: 0 },
    { name: "도창록", id: 1 },
    { name: "강세규", id: 2 },
    { name: "정현진", id: 3 },
  ]);

  const navigate = useNavigate();

  const logoutClick = () => {
    localStorage.clear();
    navigate("/");
    setIsLogin(false);
  };
  // lint to로 state전달 하는 방법 말고

  return (
    <div>
      <ul>
        {listHeader.map((list) => {
          return (
            <li key={list.id}>
              <Link to={`/List/${list.id}`}>{list.name}</Link>
              {/* <Link to="/List" state={list}>
                {list.name}
              </Link> */}
            </li>
          );
        })}
      </ul>
      <div onClick={logoutClick}>로그아웃</div>
    </div>
  );
};

export default Header;
