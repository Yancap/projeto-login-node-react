import React from 'react'
import { GlobalContext } from '../Context/GlobalContext'

export const Welcome = () => {
  const global = React.useContext(GlobalContext)
  return (
    <div>
      <h1>TESTANDO</h1>
      Welcome {global.infoLogin.name}
    </div>
  )
}
