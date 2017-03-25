import React from 'react'
import './style.css'

export default ({ identifier, description, checked, switchToggle }) => (
  <div styleName='option'>
    <input id={identifier} styleName='switcher' type='checkbox' checked={checked} onChange={switchToggle} />
    <label htmlFor={identifier}>{description}</label>
  </div>
)
