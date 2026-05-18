const Navigation =() =>{
    return(
        <nav className="navbar flex justify-between m-auto">
            <div className="logo">
                <img src="/images/logo.png" alt="Nike" />
            </div>
            <ul className="flex gap-5 items-center">
                <li herf="#">Menu</li>
                <li herf="#">Location</li>
                <li herf="#">About</li>
                <li herf="#">Contact</li>
            </ul>
            <button className="login text-lg bg-blue-500 m-16 p-2 rounded-sm">Login</button>
        </nav>
    );
}
export default Navigation;