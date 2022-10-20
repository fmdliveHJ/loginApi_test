import React, { useEffect, useState } from "react";

const FormInfo = ({
  positionInfo,
  phoneChange,
  phone,
  selectChange,
  selected,
  list,
}) => {
  return (
    <div>
      <form>
        <div className="select">
          <select value={selected} onChange={selectChange}>
            {positionInfo.map((list, idx) => {
              return (
                <option value={list.position} key={idx}>
                  {list.position}
                </option>
              );
            })}
          </select>

          <input type="number" value={phone} onChange={phoneChange} />
        </div>
      </form>
    </div>
  );
};

export default React.memo(FormInfo);
