import React from 'react'
import store from 'store'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import '../stylesheets/switch.css'

const enhance = compose(
  withState('checked', 'switchToggle', props => store.get(props.identifier)),
  withHandlers({
    onChange: props => event => {
      props.switchToggle(bool => !bool)
      store.set(props.identifier, event.target.checked)
    }
  })
)

export default enhance(({ identifier, description, checked, onChange }) => (
  <div styleName='option'>
    <input id={identifier} styleName='switcher' type='checkbox' checked={checked} onChange={onChange} />
    <label htmlFor={identifier}>{description}</label>
  </div>
))
