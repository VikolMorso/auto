import React from "react";
import add from "../../../img/Group.png";
import Organization from "../OrganizationItem/Organization";

import s from "../NewOrganization.module.css";

const SearchComponent = (props) => {
  return (
    <>
      {props.Organization.length === 0 || props.valueInput.length === 0 ? (
        <div className={s.add__new}>
          <div className={s.img}>
            <img src={add} />
          </div>
          <div className={s.paragraph}>
            Для добавления новой организации
            <br /> введите ее название, ИНН или адрес.
          </div>
        </div>
      ) : (
        <div className={s.Organization}>
          {props.Organization.suggestions.map((name) => (
            <Organization
              {...name}
              onChangeInfoValue={props.onChangeInfoValue}
              onChangeSearchValue={props.onChangeSearchValue}
              onChangeInput={props.onChangeInput}
              key={name.data.inn}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchComponent;
