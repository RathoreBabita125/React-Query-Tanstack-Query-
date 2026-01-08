import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <nav className="w-full bg-emerald-950 flex justify-between items-center p-2  ">
            <img src="public/Logo.png" alt="img" className="w-[100px] h-[60px]" />
            <ul className="flex text-[16px] text-white gap-8">
              <NavLink to='/'>
                    <li className="cursor-pointer">Home</li>
              </NavLink> 
              <NavLink to='/about'>
                    <li className="cursor-pointer">About</li>
              </NavLink> 
              <NavLink to='/post'>
                    <li className="cursor-pointer">Post</li>
              </NavLink> 
              <NavLink to='/contact'>
                    <li className="cursor-pointer">Contact</li>
              </NavLink> 
            </ul>
            <div>
                <input type="text" className="outline-none p-1 w-[15vw] bg-white mr-7 rounded-[4px] text-emerald-900" placeholder="search what you want" />
            </div>
        </nav>
    );
}

export default Header;
