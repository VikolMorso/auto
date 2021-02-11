import React, { useState } from "react";
import s from "./NewOrganization.module.css";
import { connect } from "react-redux";
import { Search, saveOrganization } from "../../redux/OrganizationReducer";
import SearchComponent from "./SearchComponent/SearchComponent";
import InfoOrganization from "./InfoOrganization/InfoOrganization";
import SavedOrganization from "../SavedOrganization/SavedOrganization";

const NewOrganization = (props) => {
  const [valueInput, onChangeInput] = useState("");
  const [isSearching, onChangeSearchValue] = useState(true);
  const [allInfoOrganization, onChangeInfoValue] = useState(null);

  const search = (e) => {
    onChangeInput(e.target.value);
    props.Search(e.target.value);
  };
  const ChangeComponent = () => {
    if (isSearching === false) {
      onChangeSearchValue(true);
      onChangeInput("");
    }
  };
  return (
    <div className={s.main}>
      <p className={s.heading}>Организация или ИП</p>
      <div className={s.form}>
        <div className={s.input}>
          <input
            type="input"
            placeholder="Введите название, ИНН или адрес организации"
            className={s.search}
            value={valueInput}
            onChange={search}
            onClick={ChangeComponent}
          />
        </div>

        {isSearching ? (
          <SearchComponent
            Organization={props.Organization}
            onChangeSearchValue={onChangeSearchValue}
            valueInput={valueInput}
            onChangeInput={onChangeInput}
            onChangeInfoValue={onChangeInfoValue}
          />
        ) : (
          <InfoOrganization
            name={
              allInfoOrganization.name.short_with_opf ||
              valueInput ||
              "Нет информации"
            }
            code={
              allInfoOrganization.address.data.postal_code || "Нет информации"
            }
            address={allInfoOrganization.address.value || "Нет информации"}
            management={
              allInfoOrganization.management
                ? allInfoOrganization.management.name
                : "Информации нет"
            }
            inn={allInfoOrganization.inn || "Нет информации"}
            kpp={allInfoOrganization.kpp || "Нет информации"}
            ogrn={allInfoOrganization.ogrn || "Нет информации"}
            SavedOrganization={props.SavedOrganization}
            saveOrganization={props.saveOrganization}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Organization: state.Organization.Organization,
    SavedOrganization: state.Organization.SavedOrganization,
  };
};

export default connect(mapStateToProps, { Search, saveOrganization })(
  NewOrganization
);
