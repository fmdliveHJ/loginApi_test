import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormInfo from "../../components/formInfo/FormInfo";

const List = ({ list, setList, positionInfo, setPositionInfo }) => {
  const param = useParams();
  const [selected, setSelected] = useState(positionInfo[0].label);

  useEffect(() => {
    console.log("param", param);
  }, [param]);

  useEffect(() => {
    setSelected(positionInfo[0].label);
  }, [list]);

  const phoneChange = (e, key) => {
    setList(
      list.map((item, idx) => {
        return idx === parseInt(param.id) ? { ...item, [key]: e } : item;
      })
    );
  };

  const selectChange = (e) => {
    /**
     * 셀렉트 체인지에서 받아오는 e값은 positionInfo의 리스트
     * 변경해줘야 하는건 LIST의 요소들
     * setlist의 item은 list의 요소들
     * idx는 list의 요소들 순서값, 무한히 늘어날수 잇음
     *
     */
    console.log("e", e);
    setSelected(e.target.value);

    setList((item, idx) => {
      return idx === parseInt(param.id)
        ? { ...item, position: e.target.value }
        : item;
    });
  };

  return (
    <>
      <div className="info">
        <span className="name">{list[param.id].name}</span>
        <span className="position">{list[param.id].position}</span>
        <span className="name">{list[param.id].phone}</span>
      </div>
      <FormInfo
        positionInfo={positionInfo}
        phoneChange={phoneChange}
        selectChange={selectChange}
        selected={selected}
        setList={setList}
        list={list}
      />
    </>
  );
};

export default List;
