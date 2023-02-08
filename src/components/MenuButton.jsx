import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../contexts/Context";

const MenuButton = (props) => {

    const location = useLocation()

    const {
        ToggleMenuState,
        Change
    } = useContext(AppContext)


    return (
        <>
            <Link
                onClick={() => {
                    ToggleMenuState()
                    Change()
                }}

                to={props.menuLink}

                className={
                    location.pathname === props.menuLink ? 'm_active' : ''
                }
            >
                {props.menuTitle}
            </Link>
        </>
    )
}

export default MenuButton