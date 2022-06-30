import React from "react";

const AppControlsInput = ({
    addFoodHandler,
    calories,
    foodName,
    setFoodName,
    setCalories,
}) => {
    const onClickFoodAdd = () => {
        addFoodHandler();
    };

    return (
        <div>
            {/* Yemek Adı Girişi */}
            <div className="row w-50 mx-auto my-3">
                <div className="col-md-12 ">
                    <input
                        onChange={(e) => setFoodName(e.target.value)}
                        value={foodName}
                        type="text"
                        placeholder="Write a meal"
                        className="form-control"
                    />
                </div>
            </div>

            {/* Yemek Kalori Girişi */}
            <div className="row w-50 mx-auto my-3">
                <div className="col-md-12 ">
                    <input
                        onChange={(e) => setCalories(e.target.value)}
                        value={calories}
                        type="number"
                        placeholder="Write the calories"
                        className="form-control"
                        min={0}
                    />
                </div>
            </div>

            {/* Yemek Ekle Butonu */}
            <div className="row w-25 justify-content-center mx-auto my-3">
                <button onClick={onClickFoodAdd} className="btn btn-success ">
                    Add
                </button>
            </div>
            <hr />
        </div>
    );
};

export default AppControlsInput;
