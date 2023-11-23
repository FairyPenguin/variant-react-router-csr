import { useState, createContext, useEffect } from 'react'

const BrowserContext = createContext()

function BrowserRouter({ children }) {
    const [urlState, setUrlState] = useState(new URL(window.location.href))


    useEffect(() => {
        function handlePopStateEvent(e) {
            console.log(e);
            setUrlState(new URL(window.location.href))
            console.log("Check if the function Working")

        }

        console.log("Check if Effect Working")

        window.addEventListener("popstate", handlePopStateEvent);

        return () => window.removeEventListener("popstate", handlePopStateEvent);

    }, []);



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