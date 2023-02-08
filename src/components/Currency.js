import React, { useContext, useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const Currency = (props) => {
  const { dispatch } = useContext(AppContext);
  const [currency, setCurrency] = useState("£ Pound");

  useEffect(() => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: currency[0],
    });
  }, [currency]);

  return (
    <div className="btn-group col-2 mt-3">
      <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Currency ({currency})
      </button>
      <ul className="dropdown-menu">
        <li>
          <a
            className="dropdown-item"
            onClick={() => {
              setCurrency("$ Dollor");
            }}
          >
            $ Dollor
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => {
              setCurrency("£ Pound");
            }}
          >
            £ Pound
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => {
              setCurrency("€ Euro");
            }}
          >
            € Euro
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => {
              setCurrency("₹ Rupee");
            }}
          >
            ₹ Rupee
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Currency;
