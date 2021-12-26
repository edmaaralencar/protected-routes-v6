import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <h1>Teste</h1>
            </Link>

            <ul>
                <Link to='/users'>Users</Link>
            </ul>
        </header>
    )
}

export default Header
