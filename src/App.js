import { UserContextProvider } from "./contexts/User"
import Main from "./layouts/Main"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { FriendsContextProvider } from "./contexts/Friends"

const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <UserContextProvider>
        <FriendsContextProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </FriendsContextProvider>
        </UserContextProvider>
      </Main>
    </BrowserRouter>

  )
}

export default App