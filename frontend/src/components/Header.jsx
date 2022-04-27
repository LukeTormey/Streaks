import {FaSignInAlt, FaSignOutAlt, FaUser, FaFire} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
    return (
      <header className='header'>
          <div className='logo'>
            <Link to='/'>
                <FaFire/>Streaks
              </Link>
          </div>
            <li>
                <Link to='/login'>
                    <FaSignInAlt/> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser/> Register
                </Link>
            </li>
      </header>
    );
  }

export default Header;