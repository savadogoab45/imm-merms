
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom'

    

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-3">
        <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-slate-500">Sahand</span>
                <span className="text-slate-700">Estate</span>
            </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center sm:w-auto">   
            <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent focus:outline-none  w-24 sm:w-64  " 
            />
            <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 text-slate-600 font-semibold text-sm sm:text-base ">
            <Link to="/">
                <li className="hidden sm:block text-slate-700  transition-all duration-300 hover:underline">Home</li>
            </Link>
            <Link to="/about">
                <li className="hidden sm:block text-slate-700  transition-all duration-300 hover:underline">About</li>
            </Link>
            <Link to="/sign-in">
                <li className="text-slate-700 hover:underline tracking-normal">Sign In</li>
            </Link>
        </ul>
      </div>
    </header>
  )
}
