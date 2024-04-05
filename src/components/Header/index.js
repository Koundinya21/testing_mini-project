import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="top-header">
      <div className="icon-container">
        <Link to="/Home">
          <img
            src="https://res.cloudinary.com/dowxofd2k/image/upload/v1705951324/cbk9qzsgq1kcwynws0sl.png"
            alt="website logo"
            className="icon"
          />
        </Link>
        <h1 className="icon-name">
          <span className="icon-name-part">NXT</span> Assess
        </h1>
      </div>
      <button type="button" className="btn" onClick={logout}>
        Logout
      </button>
    </div>
    // <div className="header-container">
    //   <div className="image-container">
    //     <img
    //       src="https://res.cloudinary.com/dowxofd2k/image/upload/v1705951324/cbk9qzsgq1kcwynws0sl.png"
    //       alt="Nxt Assess"
    //       className="header-icon"
    //     />
    //   </div>
    // </div>
  )
}

export default withRouter(Header)
