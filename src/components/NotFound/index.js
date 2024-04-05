import './index.css'

const NotFound = () => (
  <div className="notfound-container">
    <img
      src="https://res.cloudinary.com/dowxofd2k/image/upload/v1711909794/Group_7504_nhpbtp.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="content-not-found">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)
export default NotFound
