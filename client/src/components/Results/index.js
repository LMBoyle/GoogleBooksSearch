// Imports ========================================================================================

import React from "react";
import "./style.css";

// import SumBtn from "../SumBtn/SumBtn"
// import SaveBtn from "../SaveBtn";


// Functions ======================================================================================

function Results(props) {
  return (
      <div className="col-sm-4">
        <h5 className="card-header text-center"> {props.title} </h5>

        <div className="card text-center">
          <div className="no-gutters">
            <div className="card-body">
              <img src={props.img} className="card-img-top float-left" alt="placeholder" />
              <p className="card-text"> {props.synopsis} </p>
            </div>
          </div>
        </div>

        <div class="card-footer text-muted">
          2 days ago
          {/* <SaveBtn 
            title={props.title}
            author={props.author}
            synopsis={props.synopsis}
          /> */}
        </div>

      </div>
  );
}

// Export =========================================================================================

export default Results;
