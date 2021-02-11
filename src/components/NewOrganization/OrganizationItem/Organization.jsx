import React from "react";
import s from "./Organization.module.css";

const Organization = (props) => {
  let onChangeValueHOOKS = () => {
    props.onChangeInfoValue(props.data);
    props.onChangeInput(props.value);
    props.onChangeSearchValue(false);
  };
  return (
    <div className={s.main} onClick={onChangeValueHOOKS}>
      <h4>{props.value}</h4>
      <div className={s.info}>
        <div className={s.info__item}>{props.data.inn}</div>
        <div className={s.info__item}>{props.data.city}</div>
      </div>
    </div>
  );
};

export default Organization;
