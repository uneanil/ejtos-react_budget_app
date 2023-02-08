import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  // const { budget } = useContext(AppContext);
  const { dispatch, expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const [budget, setBudget] = useState(totalExpenses);
  const handleBudgetChange = (budget) => {
    if (budget > 20000) {
      alert(`Budget should not exceed ${currency} 20000`);
      setBudget(20000);
      return;
    }
    if (budget - totalExpenses < 0) {
      alert("You cannot reduce the budget value lower than the spending");
      setBudget(totalExpenses);
      return;
    }
    setBudget(budget);
    dispatch({
      type: "SET_BUDGET",
      payload: budget,
    });
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          type="number"
          step="10"
          value={budget}
          onChange={(e) => handleBudgetChange(e.target.value)}
        />
      </span>
      {/* <span>Budget: £{budget}<input type="number" step="10" /></span> */}
    </div>
  );
};
export default Budget;
