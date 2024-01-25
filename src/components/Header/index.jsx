import lion from "../../assets/images/lion.jpeg";
import "./Header.css";

const Header = () => {
    return (
        <div id="header-wrapper" className="flex justify-between">
            <div className="flex flex-row items-center gap-5">
                <img id="header-lion" src={lion} alt="lion" />
                <div className="text-white text-xl">SNULION BLOG</div>
            </div>
        </div>
    );
};

export default Header;