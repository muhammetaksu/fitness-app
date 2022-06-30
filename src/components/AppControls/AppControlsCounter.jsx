import React from "react";

const AppControlsCounter = ({ totalCalories }) => {
    return (
        <div className="col-md-6 text-start my-3">
            <h1>
                Total calories:{" "}
                <span style={{ color: "crimson" }}>{totalCalories}</span> Kcal
            </h1>
        </div>
    );
};

export default AppControlsCounter;
