const getRandomUser = async () => {
  const request = await fetch('https://randomuser.me/api/')
  const response = await request.json()
  return response
}

const getRandomFriends = async () => {
  const request = await fetch('https://randomuser.me/api/random=10')
  const response = await request.json()
  return response
}

export { getRandomUser, getRandomFriends }