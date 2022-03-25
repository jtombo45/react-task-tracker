//impt
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
        <h1 style={headStyle}>
            {title}
        </h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headStyle = {
  color: 'red', 
  backgroundColor: 'black'
}

export default Header

