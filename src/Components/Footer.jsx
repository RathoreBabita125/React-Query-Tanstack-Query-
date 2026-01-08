import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full p-5 bg-emerald-950  text-white flex justify-around items-center">

            <div className="flex gap-5">
                <p> DISCLAIMER</p>
                <p> PRIVACY POLICY</p>
            </div>
            <div>
                <p>@copyright 2025</p>
            </div>
            <div className="flex gap-2">
                <FaFacebookF />
                <FaInstagram />
                <FaHeart />
                <FaTwitter />
            </div>

        </footer>
    );
}

export default Footer;