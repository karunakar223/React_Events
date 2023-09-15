// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const imgClassName = isActive ? 'img active' : 'img'

  const onClickBtn = () => {
    setActiveEventId(id)
  }

  return (
    <li className="li-container">
      <button type="button" onClick={onClickBtn} className="btn">
        <img src={imageUrl} alt="event" className={imgClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
