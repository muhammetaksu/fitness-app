import React from "react";

const AppNavbar = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-dark">
                    <div className="container-fluid justify-content-center">
                        <a className="navbar-brand text-white fw-bold" href="#">
                            <h2>
                                Fitness
                                <span
                                    style={{
                                        color: "darksalmon",
                                        fontWeight: "700",
                                    }}
                                >
                                    App
                                </span>
                            </h2>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default AppNavbar;
