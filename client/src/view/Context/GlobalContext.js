import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
    const [infoLogin, setInfoLogin] = React.useState()
    return <GlobalContext.Provider value={{infoLogin, setInfoLogin}}>{children}</GlobalContext.Provider>
}