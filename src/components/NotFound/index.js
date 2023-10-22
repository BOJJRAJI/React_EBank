import './index.css'

const NotFound = () => (
  <div className="not-fount-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
      className="not-found-image"
    />
    <h1 className="not-heading">Page Not Found</h1>
    <p className="para">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
