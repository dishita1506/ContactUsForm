
import './navigation.css';
import '../../App.css';
function Navigation() {
  return (
    <nav>
        <div className="logo">
            <img src="/images/logo.png" alt="Do some coding logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation