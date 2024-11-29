import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="bg-header-img bg-cover bg-center">
            <div className="flex items-center justify-center gap-4 p-5">
                <img className="size-14 sm:size-16 lg:size-20" src={logo} alt="Logo" />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-Rancho">Espresso Emporium</h1>
            </div>
        </header>
    );
};

export default Header;