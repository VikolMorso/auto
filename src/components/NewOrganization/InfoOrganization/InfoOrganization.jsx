import React, { useState } from "react";
import { connect } from "react-redux";
import s from "./InfoOrganization.module.css";
import { saveOrganization } from "../../../redux/OrganizationReducer";
import imgsaved from "../../../img/Saved.png";
const InfoOrganization = (props) => {
  let saveOrganization = () => {
    props.saveOrganization(props);
  };
  return (
    <div className={s.main}>
      <h2>{props.name}</h2>
      <div className={s.info}>
        <div className={s.leftBlock}>
          <div className={s.address}>
            <h4>Юридический адрес</h4>
            <p>
              {props.code}, {props.address}
            </p>
          </div>
          <div className={s.director}>
            <h4>Генеральный директор</h4>
            <p>{props.management}</p>
          </div>
        </div>
        <div className={s.rightBlock}>
          <div className={s.item}>
            <h4>ИНН</h4>
            <span>{props.inn}</span>
          </div>
          <div className={s.item}>
            <h4>КПП</h4>
            <span>{props.kpp}</span>
          </div>
          <div className={s.item}>
            <h4>ОГРН</h4>
            <span>{props.ogrn}</span>
          </div>
        </div>
      </div>
      {props.SavedOrganization.filter((item) => item.id === props.inn)
        .length !== 0 ? (
        <div className={s.saved}>
          <img src={imgsaved} /> Сохранено
        </div>
      ) : (
        <input
          type="button"
          value="Сохранить"
          className={s.btn}
          onClick={saveOrganization}
        />
      )}
    </div>
  );
};

export default InfoOrganization;
