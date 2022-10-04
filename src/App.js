import { UserContextProvider } from "./contexts/User"
import Main from "./layouts/Main"
import Login from "./pages/Login"

const App = () => {
  return (
    <>
      <UserContextProvider>
        <Main>
          <Login/>
        </Main>
      </UserContextProvider>
    </>
  )
}

export default App