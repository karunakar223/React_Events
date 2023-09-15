// Write your code here
import './index.css'

const renderStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {renderDetails} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-view">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegisteredView = () => (
    <div className="registered-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="yet-to-reg-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-reg-img"
      />
      <p className="yet-to-reg-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="yet-reg-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="reg-closed-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="reg-closed-img"
      />
      <h1 className="reg-closed-heading">Registrations Are Closed Now!</h1>
      <p className="reg-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const switchToActiveEvents = () => {
    console.log(renderDetails)
    switch (renderDetails) {
      case renderStatus.registered:
        return renderRegisteredView()
      case renderStatus.yetToRegister:
        return renderYetToRegisterView()
      case renderStatus.registrationsClosed:
        return renderRegistrationClosedView()

      default:
        return renderNoActiveEventView()
    }
  }

  return <div className="main-view-container">{switchToActiveEvents()}</div>
}

export default ActiveEventRegistrationDetails
