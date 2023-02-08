import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//Code to import Budget.js
import Budget from "./components/Budget";

// Add code to import the other components here under

import { AppProvider } from "./context/AppContext";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseItem";
import AllocationForm from "./components/AllocationForm";
import Currency from "./components/Currency";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>

        <div className="row mt-3">
          {/* // Budget component */}
          <div className="col-sm">
            <Budget />
          </div>

          {/* //Remaining component */}
          <div className="col-sm">
            <Remaining />
          </div>

          {/* //ExpenseTotal component */}
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <Currency />{" "}
          </div>
          <div className="mt-3">
            <h2>Allocation</h2>
          </div>
          <ExpenseList />

          <h3 className="mt-3">Change allocation</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <AllocationForm />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
