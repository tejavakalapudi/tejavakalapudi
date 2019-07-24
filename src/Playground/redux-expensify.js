import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const demoState = {
  expenses: [
    {
      id: "hfahfascgajhc",
      description: "December Rent",
      note: "This was my last payment",
      createdOn: "12/12/2017",
      amount: 54000
    }
  ],
  filters: {
    text: "",
    sort: "date", //amount
    startDate: undefined,
    endDate: undefined
  }
};

const expensesDefault = [];
const filtersDefault = {
  text: "",
  sort: "date", //amount
  startDate: undefined,
  endDate: undefined
};

const addExpense = ({
  id = "",
  description = "",
  note = "",
  createdOn = 0,
  amount = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    createdOn,
    amount
  }
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = (id, expense) => ({
  type: "EDIT_EXPENSE",
  id,
  expense
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortByAmount = () => ({
  type: "SORT_FILTER",
  sort: "amount"
});

const sortByDate = () => ({
  type: "SORT_FILTER",
  sort: "date"
});

const setStartDate = startDate => ({
  type: "START_DATE_FILTER",
  startDate
});

const setEndDate = endDate => ({
  type: "END_DATE_FILTER",
  endDate
});

const expensesReducer = (state = expensesDefault, action) => {
  switch (action.type) {
    case "ADD_EXPENSE": {
      return [...state, action.expense];
    }

    case "REMOVE_EXPENSE": {
      return state.filter(({ id }) => id !== action.id);
    }

    case "EDIT_EXPENSE": {
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.expense };
        }

        return state;
      });
    }

    default:
      return state;
  }
};

const filtersReducer = (state = filtersDefault, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER": {
      return { ...state, text: action.text };
    }

    case "SORT_FILTER": {
      return { ...state, sort: action.sort };
    }

    case "START_DATE_FILTER": {
      return { ...state, startDate: action.startDate };
    }

    case "END_DATE_FILTER": {
      return { ...state, endDate: action.endDate };
    }

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const getVisibleExpenses = (expenses, { text, sort, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
          typeof startDate !== "number" || startDate >= expense.createdOn,
        endDateMatch =
          typeof endDate !== "number" || endDate <= expense.createdOn,
        textMatch = expense.description
          .toLowerCase()
          .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sort === "date") {
        return a.createdOn < b.createdOn ? 1 : -1;
      }

      if (sort === "amount") {
        return a.amount > b.amount ? 1 : -1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  const visualExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visualExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 200, createdOn: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 100, createdOn: -500 })
);

// store.dispatch( removeExpense( { id : expenseOne.expense.id } ) );

// store.dispatch( editExpense( expenseTwo.expense.id, { amount : 500 } ) );

// store.dispatch( setTextFilter( "Rent" ) );
// store.dispatch( setTextFilter() );

// store.dispatch( sortByAmount() );
// store.dispatch( sortByDate() );

//store.dispatch( setStartDate( 125 ) );

//store.dispatch( setTextFilter( "CO" ) );
//store.dispatch( setStartDate() );
//store.dispatch( setEndDate( 1250 ) );
