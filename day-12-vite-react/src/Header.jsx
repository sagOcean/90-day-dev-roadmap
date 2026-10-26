function Header(){

    return <>
        <nav>
        <ul className="sidebar">
            <li><a href="#">Dropbox</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Billing</a></li>
            <li><a href="#">Sign up</a></li>
            <li><a href="#">login</a></li>
    
        </ul>
        <ul>
            <li><a href="#">Dropbox</a></li>
            <li className="change"><a href="#">Home</a></li>
            <li className="change"><a href="#">About us</a></li>
            <li className="change"><a href="#">Billing</a></li>
            <li className="change"><a href="#">Sign up</a></li>
            {/* <!-- <li><a href="#">login</a></li> --> */}
            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
    
        </ul>
        </nav>
    </>
}

export default Header;