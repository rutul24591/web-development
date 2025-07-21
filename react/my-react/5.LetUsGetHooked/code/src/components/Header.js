import constants from "../utils/constants"; // Named Import

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={constants.LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul className="nav">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Offers</li>
                    <li className="nav-item">Restaurants</li>
                    <li className="nav-item">Help</li>
                    <li className="nav-item">Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
