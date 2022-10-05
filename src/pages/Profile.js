import { UserContext } from "../contexts/User"
import { FriendsContext } from "../contexts/Friends"
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from "react"
import H1 from "../components/H1"
import H3 from "../components/H3"
import FriendCard from "../components/FriendCard"
import Button from "../components/Button"
import { getRandomFriends, getRandomUser } from "../api/randomUser"
import H2 from "../components/H2"

const Profile = () => {

  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const { friends, setFriends } = useContext(FriendsContext)
  console.log(user," profile")

  useEffect(() => {
    if(!user){
      navigate('/')
    }
  }, [navigate, user])

  const fetchRandomFriend = async () => {
    const data = await getRandomUser()
    const friendsArray = [...friends, data.results[0]]
    setFriends(friendsArray)
  }


  if(!user){
    return <p>Loading...</p>
  }
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <img src={user.picture.large ? (user.picture.large):("https://i.stack.imgur.com/l60Hf.png")} alt="default" className="rounded-full" width="150px"/>
      </div>
      <div className="text-center">
        <H3>Hi, My name is</H3>
        <H1>{user.name.first} {user.name.last}</H1>
      </div>
      <div className="mt-10">
        <H2>Friends</H2>
        {friends.length === 0 ? (
          <Button text={"Add a friend"} handleClick={fetchRandomFriend} />
          ):(
          <>
            <Button text={"Add a friend"} handleClick={fetchRandomFriend} />
            <div className="sm-w-[90%] w-full flex flex-row flex-wrap gap-3 justify-center mt-5">
              {friends.map((friend, i) => {
                return(<FriendCard key={i} name={friend.name.first} image={friend.picture.large}/>)
              })}
            </div>
            {console.log(friends)}
          </>
        )}
      </div>
    </div>
  )
}

export default Profile


