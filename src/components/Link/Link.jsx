import { BrowserContext } from "../BrowserRouter/BrowserRouter"
import { useContext } from "react"


function Link({ children, to }) {

    const { setUrlState } = useContext(BrowserContext)

    function clickHandler() {
        window.history.pushState({}, "", to)
        setUrlState(new URL(`${window.location.origin}${to}`))

    }

    return (
        <>
            <a
                onClick={clickHandler}
            >

                {children}
            </a>
        </>



    )
}

export default Link