import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='w-full h-screen'>
            <div className="container mx-auto w-full">
                <div className="flex justify-center items-center mt-[200px]">
                    <a
                        href="https://vitejs.dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a
                        href="https://react.dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                </div>
                <h1 className='text-[2.5rem]'>Vite + React</h1>
                <div className="card">
                    <button className='text-3xl mb-12 py-3 px-5 border border-slate-400 rounded-xl' onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </div>
    )
}

export default App
