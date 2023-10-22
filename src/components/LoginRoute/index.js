import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginRoute extends Component {
  state = {userId: '', pin: '', error: ''}

  onSubmitForm = async e => {
    e.preventDefault()
    const {userId, pin} = this.state
    const details = {user_id: userId, pin}
    const options = {method: 'POST', body: JSON.stringify(details)}
    const responce = await fetch('https://apis.ccbp.in/ebank/login', options)
    const data = await responce.json()
    console.log(data)
    if (responce.ok) {
      const jwtToken = data.jwt_token
      const {history} = this.props
      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
      })
      history.replace('/')
      this.setState({userId: '', pin: '', error: ''})
    } else {
      this.setState({error: data.error_msg})
    }
  }

  render() {
    const {userId, pin, error} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-bg-container">
        <div className="login-container">
          <div className="login-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="login-image"
            />
          </div>

          <form className="form" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
              alt="website logo"
              className="login-logo"
            />
            <h1 className="form-heading">Welcome Back</h1>
            <div className="label-input-container">
              <label className="label" htmlFor="user">
                User ID
              </label>
              <br />
              <input
                value={userId}
                onChange={e => this.setState({userId: e.target.value})}
                className="input"
                type="text"
                placeholder="Enter User ID"
                id="user"
              />
            </div>
            <div className="label-input-container">
              <label className="label" htmlFor="pin">
                PIN
              </label>
              <br />
              <input
                value={pin}
                onChange={e => this.setState({pin: e.target.value})}
                className="input"
                type="password"
                placeholder="Enter PIN"
                id="pin"
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {error !== '' && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
