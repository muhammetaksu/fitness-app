import React from "react";

const AppFoodList = ({ foods, deleteFoodHandler }) => {
    return (
        <>
            {foods.map((food, index) => (
                <div key={index} id="foodList" className=" col-md-2 mb-4">
                    <div key={index} className="bg-light">
                        <div>
                            <div
                                className="p-1 bg-light text-center "
                                style={{ height: "55px", overflow: "hidden" }}
                            >{`${food.foodName}`}</div>
                            <div
                                className="py-1"
                                style={{
                                    backgroundColor: "lightgray",
                                    height: "30px",
                                    overflow: "hidden",
                                }}
                            >{`${food.calories} Kcal`}</div>
                        </div>
                        <div style={{}} className=" bg-light">
                            <button
                                onClick={() => deleteFoodHandler(food.id)}
                                className=" my-2 btn btn-danger btn-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AppFoodList;
