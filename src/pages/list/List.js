import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FormInfo from "../../components/formInfo/FormInfo";

const List = ({
  list,
  setList,
  setPositions,
  setPhoneNum,
  setSelected,
  positionInfo,
  positions,
  selected,
  phoneNum,

  state,
  setState,
}) => {
  const location = useLocation();
  let listUp = location.state.list;

  useEffect(() => {
    console.log("list", list.length);
  }, []);

  useEffect(() => {
    console.log("listUp", listUp);
    setPositions(true);
    setPhoneNum(listUp.phone);
    setSelected(positionInfo[0].label);
  }, [listUp]);

  const phoneChange = (e) => {
    setPhoneNum(e.target.value);
    console.log("phone", phoneNum);
  };
  // setList 에 list(state) 각요소에 접근해서 list.position을 사용해서 변경해줌
  // 선택될때마다 저장되는 ... 를 활용함

  //onChange key값고 value값 연결해서 변경하려고함 x 헤더에서 map오류남

  //setList 에 값은 들어감, 셀렉트 기본 항목의 갯수와 list갯수가 맞지 않아서 안됨

  const selectChange = (e) => {
    setSelected(e.target.value);
    setPositions(false);
    setList([{ position: e.target.value }]);
    console.log(list);
  };

  return (
    <>
      <div className="info">
        <span className="name">{listUp.name}</span>
        <span className="position">
          {positions && listUp.position}
          {!positions && selected}
        </span>
        <span className="name">{phoneNum ? phoneNum : list.phone}</span>
      </div>
      <FormInfo
        positionInfo={positionInfo}
        phoneChange={phoneChange}
        selectChange={selectChange}
        selected={selected}
        list={list}
      />
    </>
  );
};

export default List;
