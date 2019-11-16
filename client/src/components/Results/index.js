// Imports ========================================================================================

import React from "react";
import "./style.css";

// import SumBtn from "../SumBtn/SumBtn"
// import SaveBtn from "../SaveBtn";


// Functions ======================================================================================

function Results(props) {
  return (
      <div className="col-sm-4">
        <div className="card text-center">
          <h5 className="card-header"> {props.title} </h5>
          <div className="row no-gutters">

            <div className="col">
              <img src={props.img} className="card-img-top" alt="placeholder" />
            </div>

            <div className="col">
              <div className="card-body">
                <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <SumBtn> View Summary </SumBtn> */}
                {/* <SaveBtn 
                  title={props.title}
                  author={props.author}
                  synopsis={props.synopsis}
                /> */}
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}

// Export =========================================================================================

export default Results;
