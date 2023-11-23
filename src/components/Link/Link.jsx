import { BrowserContext } from "../BrowserRouter/BrowserRouter"
import { useContext } from "react"


function Link({ children, to }) {

    const { setUrlState } = useContext(BrowserContext)

    function clickHandler() {
        setUrlState(new URL(`${window.location.origin}${to}`))

    }

    return (
        <>
            <a
                onClick={clickHandler}
            >
                <p>Link Component</p>

                {children}
            </a>
        </>



    )
}

export default Link