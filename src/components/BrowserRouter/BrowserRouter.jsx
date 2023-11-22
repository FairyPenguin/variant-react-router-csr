import { useState, createContext, useEffect } from 'react'

const BrowserContext = createContext()

function BrowserRouter({ children }) {
    const [urlState, setUrlState] = useState(new URL(window.location.href))

    console.log(urlState)
    return (
        <>
            <BrowserContext.Provider
                value={{ urlState, setUrlState }}>
                <div>BrowserContext</div>
                {children}


            </BrowserContext.Provider>
        </>
    )
}

export default BrowserRouter
export { BrowserContext }