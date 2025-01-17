import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../hooks/useCart";



const NavBar = () => {
    const { user, logOut } = useAuth()
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))

    }

    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order/salad">Our order</Link></li>
        <li><Link to="/secrete">Secrete</Link></li>
        <Link to="/dashboard/cart">
            <button className="btn">
                <FaCartArrowDown />
                <div className="badge badge-secondary">+ {cart.length}
                </div>
            </button>
        </Link>


        {user ? <>

            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            {/* <span>{user?.displayName}</span> */}
        </>
            :
            <>
                <li><Link to="/login">Login</Link></li>
            </>
        }


    </>



    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Eleyas Rstaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Appointment</a>
            </div>
        </div>
    );
};

export default NavBar;