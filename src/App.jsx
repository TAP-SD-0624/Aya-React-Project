import { useState } from 'react'
import './App.css'
import NavBar from './components/1.navBar/NavBar'
import Flex from './components/2.flex/Flex'
import Content from './components/3.content/Content'
import Favourite from './components/4.favourite/Favourite'


function App() {
  const [count, setCount] = useState(0)
  return(
    <>
    <div className='body'>
      <NavBar/>
      <Flex/>
      <Content/>
      <Favourite/>
    </div>
    </>

  )
}

export default App


  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //     <NavBar/>
  //   </>
  // )