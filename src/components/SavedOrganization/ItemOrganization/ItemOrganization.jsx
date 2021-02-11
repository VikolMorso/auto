import React, { useState } from "react";
import s from "../SavedOrganization.module.css";
import imgDelete from "../../../img/delete.png";
import details from "../../../img/details.png";
import detailsReverse from "../../../img/details_reverse.png";

const ItemOrganization = (props) => {
  const [allInfo, changeInfo] = useState(false);
  let deleteOrganization = () => {
    props.deleteOrganization(props.id);
  };
  let toggleInfo = () => {
    if (allInfo === false) {
      changeInfo(true);
    } else {
      changeInfo(false);
    }
  };
  return (
    <div className={s.item_main}>
      <div className={s.item}>
        <div className={s.leftBlock}>
          <h3>{props.info.name}</h3>
          <div className={s.info}>
            <div className={s.info_item}>
              <span>
                <b>ИНН</b>
              </span>
              <span>{props.info.inn}</span>
            </div>

            {allInfo === true && (
              <div>
                <div>
                  <span>
                    <b>КПП</b>
                  </span>
                  <span>{props.info.kpp}</span>
                </div>
                <div>
                  <span>
                    <b>ОГРН</b>
                  </span>
                  <span>{props.info.ogrn}</span>
                </div>
                <div>
                  <span>
                    <b>Юридический адрес</b>
                  </span>
                  <span>
                    {props.info.code}, {props.info.address}
                  </span>
                </div>
                <div>
                  <span>
                    <b>Генеральный директор</b>
                  </span>
                  <span>{props.info.kpp}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={s.rightBlock}>
          <div onClick={deleteOrganization}>
            <img src={imgDelete} />
          </div>
          <div className={s.ico} onClick={toggleInfo}>
            <div>Подробнее</div>
            <img src={allInfo ? detailsReverse : details} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemOrganization;
