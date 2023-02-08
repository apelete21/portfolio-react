import { createContext, useState } from "react"

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
        }, 1500);
    }

    const [popup, setView] = useState(false)
    const [itemView, setItemView] = useState()

    function togglePopupView(item) {
        console.log(item)
        if (popup === true) {
            setView(false)
        } else {
            setView(true)
            setItemView(item)
        }
    }


    return (
        <AppContext.Provider
            value={{
                menuState,
                ToggleMenuState,
                animate,
                Change,
                popup,
                togglePopupView,
                itemView,
                setItemView
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}