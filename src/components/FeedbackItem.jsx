import { FaTimes, FaEdit } from 'react-icons/fa'
import React from 'react'
import { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedBackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
        <div className="num-display">
            {item.rating}
        </div>
        <button className='close'><FaTimes onClick={() => deleteFeedback(item.id)} color="purple" /></button>
        <button onClick={() => editFeedback(item)} className="edit"><FaEdit color="purple" /></button>
        <div className="text-display">
            {item.text}
        </div>
    </Card>
  )
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedBackItem