import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const Header = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
        className="logo"
      />
      <button className="logout-button" type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
