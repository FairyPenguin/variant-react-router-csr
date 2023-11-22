import { useContext } from "react"
import { BrowserContext } from "../BrowserRouter/BrowserRouter"

function Route({ children, path }) {

    const { urlState } = useContext(BrowserContext)

    console.log(urlState, path)

    return (
        <>
            {/* <div>Route</div> */}
            {path === urlState.pathname ?
                <section> {children} </section>


                : "-"}

        </>

    )
}

export default Route