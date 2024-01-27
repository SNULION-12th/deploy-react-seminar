import lion from "../../assets/images/lion.jpeg";

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full gap-5 bg-black px-5 py-2.5 h-20">
            <div className="flex flex-row items-center gap-5">
                <img src={lion} alt="lion" className="max-h-16 rounded-full" />
                <div className="text-white text-xl">SNULION BLOG</div>
            </div>
        </div>
    );
};

export default Header;