import "./App.css";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import AppControlCounter from "./components/AppControls/AppControlsCounter.jsx";
import AppControlDelete from "./components/AppControls/AppControlsDelete.jsx";
import AppControlsInput from "./components/AppControls/AppControlsInput.jsx";
import AppFoodFilter from "./components/AppFoodFilter/AppFoodFilter";
import AppFoodList from "./components/AppFoodList/AppFoodList";
import { useEffect, useState } from "react";

function App() {
    const [foods, setFoods] = useState([]);
    const [foodName, setFoodName] = useState("");
    const [calories, setCalories] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");

    const addFoodHandler = () => {
        console.log("Yemek Adı:", foodName, "Kalori:", calories);

        const oldFoods = [...foods];
        const food = {
            foodName,
            calories,
            id: Math.floor(Math.random() * 100000),
        };
        const newFoods = oldFoods.concat(food);

        // setFoods(newFoods);
        if (calories <= 0 || foodName === "") {
            alert("Food name or calories cannot be blank.");
        } else {
            setFoods(newFoods);
            localStorage.setItem("foods", JSON.stringify(newFoods));
        }
        setFoodName("");
        setCalories("");
    };
    /****** Calculate calories */
    const initialValue = 0;
    const totalCalories = foods
        .map((food) => food.calories)
        .reduce((acc, value) => acc + +value, initialValue);

    /****** Delete all food */
    const deleteAllFoods = () => {
        setFoods([]);
        localStorage.clear();
    };

    /****** Delete a food */
    const deleteFoodHandler = (id) => {
        const oldFoods = [...foods];
        const newFoods = oldFoods.filter((food) => food.id !== id);

        console.log(id);
        console.log("old foods");
        console.log(oldFoods);
        console.log("new foods");
        console.log(newFoods);

        setFoods(newFoods);
        localStorage.setItem("foods", JSON.stringify(newFoods));
    };

    /****** Filter Function */

    useEffect(() => {
        if (selectedFilter === "Asc") {
            const oldState = [...foods];
            const ascFoods = oldState.sort((a, b) => a.calories - b.calories);
            setFoods(ascFoods);
        } else if (selectedFilter === "Desc") {
            const oldState = [...foods];
            const descFoods = oldState.sort((a, b) => b.calories - a.calories);
            setFoods(descFoods);
        }
    }, [selectedFilter]);

    /** local storage get data */
    useEffect(() => {
        const localStorageFoods = JSON.parse(localStorage.getItem("foods"));
        if (localStorageFoods == null) {
            setFoods([]);
        } else {
            setFoods(localStorageFoods);
        }
    }, []);

    return (
        <div className="App">
            <AppNavbar />
            <div className="container">
                {/* Kalori Hesaplama Bölümü */}
                <div className="row">
                    <AppControlCounter totalCalories={totalCalories} />
                    <AppControlDelete deleteAllFoods={deleteAllFoods} />
                </div>
                <hr />

                {/* Yemek Girişi */}
                <div className="column ">
                    <AppControlsInput
                        addFoodHandler={addFoodHandler}
                        foodName={foodName}
                        calories={calories}
                        setFoodName={setFoodName}
                        setCalories={setCalories}
                    />

                    {/* Yemek Filtreleme Bölümü */}
                    <AppFoodFilter
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                    />

                    {/* Yemek Listesi Bölümü */}
                    <div className="row">
                        <AppFoodList
                            foods={foods}
                            deleteFoodHandler={deleteFoodHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
