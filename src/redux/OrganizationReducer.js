import SearchOrganization from '../API/API'

const SAVE_ORGANIZATION = "SAVE_ORGANIZATION";
const SET_ORGANIZATION = "SET_ORGANIZATION"
const DELETE_ORGANIZATION = "DELETE_ORGANIZATION"

let initialState = {
  Organization: [],
  SavedOrganization: []
};

const Organization = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_ORGANIZATION: {
      return { ...state, Organization: action.organizations };
    }
    case SAVE_ORGANIZATION: {
      let newOrganization ={
        id: action.organization.inn,
        info: action.organization
      }
      return {...state, SavedOrganization: [...state.SavedOrganization, newOrganization ] }
    }
    case DELETE_ORGANIZATION:{
      return {...state, SavedOrganization: [...state.SavedOrganization.filter( item=> item.id !== action.id)]}
    }
    default:
      return state;
  }
};

export const SetOrganization = (organizations) => ({
  type: SET_ORGANIZATION,
  organizations
});

export const saveOrganization = (organization) =>({
  type: SAVE_ORGANIZATION,
  organization
})

export const deleteOrganization = (id) =>({
  type: DELETE_ORGANIZATION,
  id
})





export const Search = (value) => {
  return async (dispatch) => {
    let data = await SearchOrganization(value);
    dispatch(SetOrganization(data))
  }
}

export default Organization;
