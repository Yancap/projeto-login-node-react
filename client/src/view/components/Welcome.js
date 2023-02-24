import React from 'react'
import { GlobalContext } from '../Context/GlobalContext'

export const Welcome = () => {
  const global = React.useContext(GlobalContext)
  return (
    <div>Welcome {global.infoLogin.name}</div>
  )
}
