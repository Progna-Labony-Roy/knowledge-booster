import PropTypes from 'prop-types'

const SavedBlog = ({savedBlog}) => {
  return (
    <div>
        <p>{savedBlog.title}</p>
    </div>
  )
}

SavedBlog.propTypes = {
    savedBlog: PropTypes.array
}

export default SavedBlog