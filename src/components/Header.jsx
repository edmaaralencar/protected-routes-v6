import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>

            <ul>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
            </ul>
        </header>
    )
}

export default Header
