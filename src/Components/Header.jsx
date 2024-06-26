import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className=" mx-auto my-8 border-black border py-4">
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-10 mx-auto w-full md:w-11/12 lg:w-10/12">
                <NavLink className="bg-black text-white rounded-md px-2 py-2 font-bold  md:text-2xl my-auto" to="/">Home</NavLink>
                <NavLink className="bg-black text-white rounded-md px-2 py-2 font-bold  md:text-2xl my-auto" to="/signup">Sign up</NavLink>
                <NavLink className="bg-black text-white rounded-md px-2 py-2 font-bold  md:text-2xl my-auto" to="/signin">Sign in</NavLink>
                <NavLink className="bg-black text-white rounded-md px-2 py-2 font-bold  md:text-2xl my-auto" to="/users">Users</NavLink>
                <NavLink className="bg-black text-white rounded-md px-2 py-2 font-bold  md:text-2xl my-auto" to="/addCoffee">Add Coffee</NavLink>
            </div>
        </div>

    );
};

export default Header;