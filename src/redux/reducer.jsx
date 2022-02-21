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

export const resultsReducer = (store = { results: [] }, action) => {
  let newresults;
  switch (action.type) {
    case ADD_RESULTS:
      return { ...store, results: action.payload };

    case SORT_TITLE_ASC:
      newresults = [...store.results];
      newresults.sort(function (a, b) {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });

      return { ...store, results: newresults };

    case SORT_TITLE_DESC:
      newresults = [...store.results];
      newresults.sort(function (a, b) {
        return b.title.charCodeAt(0) - a.title.charCodeAt(0);
      });

      return { ...store, results: newresults };

    case SORT_QUALITY_ASC:
      newresults = [...store.results];
      newresults.sort(function (a, b) {
        return a.quality - b.quality;
      });

      return { ...store, results: newresults };

    case SORT_QUALITY_DESC:
      newresults = [...store.results];
      newresults.sort(function (a, b) {
        return b.quality - a.quality;
      });

      return { ...store, results: newresults };

    case SORT_DATE_ASC:
      newresults = [...store.results];
      newresults.sort(function (a, b) {
        return (
          new Date(Number(a.creation_date)) - new Date(Number(b.creation_date))
        );
      });

      return { ...store, results: newresults };

    case SORT_DATE_DESC:
      newresults = [...store.results];
      newresults.sort(function (a, b) {
        return (
          new Date(Number(b.creation_date)) - new Date(Number(a.creation_date))
        );
      });

      return { ...store, results: newresults };

    case FILTER_EXPLICIT:
      return {
        ...store,
        results: store.results.filter(function (e) {
          return e.explicit !== true;
        }),
      };
    default:
      return store;
  }
};
