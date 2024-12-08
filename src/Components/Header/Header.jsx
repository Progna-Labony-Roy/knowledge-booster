import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="flex md:justify-between border-b-2">
            <h1 className="text-3xl font-bold mt-1">Knowledge Booster</h1>
            <img className="h-12 mb-2" src={profile} alt="" />
        </div>
    );
};

export default Header;