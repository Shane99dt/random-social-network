import { UserContext } from "../contexts/User"
import { FriendsContext } from "../contexts/Friends"
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from "react"
import H1 from "../components/H1"
import H3 from "../components/H3"
import FriendCard from "../components/FriendCard"
import Button from "../components/Button"
import { getRandomUser } from "../api/randomUser"

const Profile = () => {

  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const { friends, setFriends } = useContext(FriendsContext)
  console.log(user," profile")

  useEffect(() => {
    if(!user){
      navigate('/')
    }
  }, [user])

  useEffect(() => {
    fetchRandomFriend()
  }, [])

  const fetchRandomFriend = async () => {
    const data = await getRandomUser()
    setFriends(data.results[0])
  }

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
      <div className="mt-10">
        <H3>Friends</H3>
        {!friends ? (
          <Button text={"Add a friend"} handleClick={fetchRandomFriend} />
        ):(
          <FriendCard name={"ASA"}/>
        )}
      </div>
    </div>
  )
}

export default Profile


