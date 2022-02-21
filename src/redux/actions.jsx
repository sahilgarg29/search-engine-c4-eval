import axios from "axios";
import {
  ADD_RESULTS,
  FILTER_EXPLICIT,
  SORT_DATE_ASC,
  SORT_DATE_DESC,
  SORT_QUALITY_ASC,
  SORT_QUALITY_DESC,
  SORT_TITLE_ASC,
  SORT_TITLE_DESC,
} from "./actionTypes";

export const addResults = (payload) => {
  return {
    type: ADD_RESULTS,
    payload,
  };
};

export const sortByTitleASC = () => {
  return {
    type: SORT_TITLE_ASC,
  };
};

export const sortByTitleDESC = () => {
  return {
    type: SORT_TITLE_DESC,
  };
};

export const sortByDATEASC = () => {
  return {
    type: SORT_DATE_ASC,
  };
};

export const sortByDateDESC = () => {
  return {
    type: SORT_DATE_DESC,
  };
};

export const sortByQualityASC = () => {
  return {
    type: SORT_QUALITY_ASC,
  };
};

export const sortByQualityDESC = () => {
  return {
    type: SORT_QUALITY_DESC,
  };
};

export const filterExplicit = () => {
  return {
    type: FILTER_EXPLICIT,
  };
};

export const fetchResults = (query) => (dispatch) => {
  axios
    .get(`https://fast-reef-22226.herokuapp.com/data?q=${query}`)
    .then((res) => {
      console.log(res);
      dispatch(addResults(res.data));
    });
};
