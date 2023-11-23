// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Navbar } from "../src/components/index"
// import { Blog, List, About } from "../src/Pages/index"
import About from "./About"
import Blog from "./Blog"
import List from "./List"
import Link from '../src/components/Link/Link'

function App() {

  return (
    <>

      <h1>App Home</h1>

      <BrowserRouter>

        <Navbar />

        <Route path="/about">
          <About />
          <h2>about</h2>
          <a href="/2">Go to route 2...</a>
        </Route>

        <Route path="/list">
          <List />
          <h2>List</h2>
        </Route>

        <Route path="/blog">
          <Blog />
          <h2>Blog</h2>
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
