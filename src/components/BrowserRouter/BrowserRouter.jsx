import { useState, createContext, useEffect } from 'react'

function BrowserRouter({ children }) {

    const [urlState, setUrlState] = useState("")

    const BrowserRouter = createContext()

    return (
        <>
            <BrowserRouter.Provider value={urlState}>

                {children}
                <div>BrowserRouter</div>

            </BrowserRouter.Provider>
        </>
    )
}

export default BrowserRouter
export { BrowserRouter }