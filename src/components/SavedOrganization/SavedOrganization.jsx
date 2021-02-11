import React from "react";
import s from "./SavedOrganization.module.css";
import { connect } from "react-redux";
import { deleteOrganization } from "../../redux/OrganizationReducer";
import ItemOrganization from "./ItemOrganization/ItemOrganization";

const SavedOrganization = (props) => {
  return (
    <div className={s.main}>
      {props.SavedOrganization.length > 0 ? (
        props.SavedOrganization.map((item) => (
          <ItemOrganization
            {...item}
            deleteOrganization={props.deleteOrganization}
          />
        ))
      ) : (
        <div className={s.saveOrganization}>Сохраните организации</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  SavedOrganization: state.Organization.SavedOrganization,
});

export default connect(mapStateToProps, { deleteOrganization })(
  SavedOrganization
);
