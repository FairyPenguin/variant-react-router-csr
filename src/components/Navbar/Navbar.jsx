import Link from "../Link/Link"

function Navbar() {
    return (

        <nav>
            <Link to={"/home"}>HOME</Link>
            <br />
            <Link to={"/blog"}>BLOG</Link>
            <br />
            <Link to={"/about"}>ABOUT</Link>
        </nav>
    )
}

export default Navbar