import { UserContext } from "../contexts/User"
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from "react"
import H1 from "../components/H1"
import H3 from "../components/H3"

const Profile = () => {

  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  console.log(user," profile")

  useEffect(() => {
    if(!user){
      navigate('/')
    }
  }, [user])

  if(!user){
    return <p>Loading...</p>
  }


  return (
    <div>
      <div className="mx-auto"><img src={user.picture.large ? (user.picture.large):("https://i.stack.imgur.com/l60Hf.png")} alt="default" className="rounded-full" width="150px"/></div>
      <div>
        <H3>Hi, My name is</H3>
        <H1>{user.name.first} {user.name.last}</H1>
      </div>
    </div>
  )
}

export default Profile


