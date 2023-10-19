import { useState, useEffect } from 'react'
import { TabBar } from '../TabBar'
import {HiMoon} from 'react-icons/hi'
import '../../index.css'
const Navbar = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(()=>{
    if (theme === 'dark'){
      document.documentElement.classList.add("dark")
    } else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const handleThemeSwitch =()=>{
    setTheme(theme==="dark"? "ligth":"dark")
  }

  return (
    <>
    <nav className=" hidden dark:bg-slate-800 bg-slate-50 text-slate-800 dark:text-slate-200 lg:flex w-full justify-between items-center p-5 border-b-2 top-0 fixed z-10">
      <ul>
        <li className=" font-bold text-2xl text-red-700 "><a href="#home">Kaisher Dev</a></li>
      </ul>
      <ul className="flex gap-8 font-semibold text-lg">
        <li className=" hover:text-indigo-500 "><a href="#home">Home</a></li>
        <li className=" hover:text-indigo-500 "><a href="#about">About</a></li>
        <li className=" hover:text-indigo-500 "><a href="#skills">Skills</a></li>
        <li className=" hover:text-indigo-500 "><a href="#project">Projects</a></li>
      </ul>
      <ul className='flex justify-center items-center gap-4'>
        <button onClick={handleThemeSwitch}><HiMoon className='w-6 h-6'/></button>
        <li className="border-2 border-indigo-500 rounded-lg p-2 hover:bg-slate-200 hover:text-slate-600">
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </nav>
    <TabBar/>
    </>
  )
}
export { Navbar }