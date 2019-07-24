export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

export const sortByAmount = () => ({
  type: "SORT_FILTER",
  sort: "amount"
});

export const sortByDate = () => ({
  type: "SORT_FILTER",
  sort: "date"
});

export const setStartDate = startDate => ({
  type: "START_DATE_FILTER",
  startDate
});

export const setEndDate = endDate => ({
  type: "END_DATE_FILTER",
  endDate
});
