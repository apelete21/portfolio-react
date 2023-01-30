import { createContext, useEffect, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";

export const AppContext = createContext();

export function AppContextProvider(props) {

    const [menuState, setMenuState] = useState(false);

    const ToggleMenuState = () => {
        if (menuState === true) {
            setMenuState(false)
        } else {
            setMenuState(true)
        }
    }

    const [animate, setAnimate] = useState(false)

    function Change() {
        setAnimate(true)
            setTimeout(() => {
                setAnimate(false)
            }, 2000);
        }

    useEffect(() => {
        console.log(menuState)
    }, [menuState])


    return (
        <AppContext.Provider
            value={{
                menuState,
                ToggleMenuState,
                animate,
                Change
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}