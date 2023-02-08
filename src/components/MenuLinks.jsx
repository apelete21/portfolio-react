import React from "react";
import MenuButton from "./MenuButton";

const MenuLinks = () => {
    return (
        <>
            <ul className='w-100 dflex'>
                <li>
                    <MenuButton menuTitle='Home' menuLink='/' ></MenuButton>
                </li>
                <li>
                    <MenuButton menuTitle='Skills' menuLink='/skills' ></MenuButton>
                </li>
                <li>
                    <MenuButton menuTitle='Portfolio' menuLink='/portfolio' ></MenuButton>
                </li>
                <li>
                    <MenuButton menuTitle='About' menuLink='/about' ></MenuButton>
                </li>
                <li>
                    <MenuButton menuTitle='Contact Me' menuLink='/contact' ></MenuButton>
                </li>
            </ul>

        </>
    )
}

export default MenuLinks