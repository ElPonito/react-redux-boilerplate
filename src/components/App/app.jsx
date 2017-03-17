import { Link } from 'react-router'

const App = ({children}) => {
    return (
        <div>
            <Link to="/">
                <div style={{display: "inline", "margin-right": "10px"}}>Counter</div>
            </Link>
            <Link to="/hello-world">
                <div style={{display: "inline", "margin-right": "10px"}}>Hellow World</div>
            </Link>
            <Link to="/not-existing-route">
                <div style={{display: "inline"}}>Not-existing-route</div>
            </Link>
            {children}
        </div>
    )
}

export default App