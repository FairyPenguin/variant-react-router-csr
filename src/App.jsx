// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Link } from "../src/components/index"
// import { Blog, List, About } from "../src/Pages/index"
import About from "./About"
import Blog from "./Blog"
import List from "./List"

function App() {

  return (
    <>

      <h1>App Home</h1>

      <BrowserRouter>

        <Route path="/about">
          <About />
          <h1>aaa</h1>
        </Route>

        <Route path="/list">
          <List />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

      </BrowserRouter>




      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
