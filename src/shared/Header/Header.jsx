import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 lg:py-10 max-w-7xl mx-auto">
            <div className="navbar-start w-full flex justify-between items-center">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/donation'>Donation</Link></li>
                        <li><Link to='/events'>Events</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><button className="btn btn-info mb-3">Register</button></li>
                        <li><button className="btn btn-error">Admin</button></li>
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" className='h-[50px]' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/donation'>Donation</Link></li>
                    <li><Link to='/events'>Events</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li className='flex gap-2 ml-4'>
                        <button className="btn btn-info">Register</button>
                        <button className="btn btn-error">Admin</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;