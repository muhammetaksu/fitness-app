import React from "react";

const AppControlsDelete = ({ deleteAllFoods }) => {
    return (
        <div className="col-md-6 my-3">
            <button
                onClick={() => deleteAllFoods()}
                className="btn btn-warning text-end"
            >
                Clear Food List
            </button>
        </div>
    );
};

export default AppControlsDelete;
