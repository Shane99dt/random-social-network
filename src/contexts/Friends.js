import { createContext, useState } from "react";

const FriendsContext = createContext({})

const FriendsContextProvider = ({ children }) => {
  const [ friends, setFriends ] = useState([])

  const value = {
    friends: friends,
    setFriends: setFriends
  }

  return (<FriendsContext.Provider value={value}>{children}</FriendsContext.Provider>)
}

export { FriendsContext, FriendsContextProvider}