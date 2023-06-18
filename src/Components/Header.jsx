import CSC_Logo from '../Assets/Images/CSC-logo_noInc_white-black_072318_175x146.png'

const Header = () => {
    return (
        <div className='Header'>
            <div className="nav">
                <div className="logo">
                    <img src={CSC_Logo} alt="" />
                </div>
                <div className="navLinks">
                    <ul>
                        <li>
                            <div>Home</div>
                        </li>
                        <li>
                            <div>About</div>
                        </li>
                        <li>
                            <div>Products</div>
                        </li>
                        <li>
                            <div>Services</div>
                        </li>
                        <li>
                            <div>Case Studies</div>
                        </li>
                        <li>
                            <div>Trainings</div>
                        </li>
                        <li>
                            <div>Contact Us</div>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;