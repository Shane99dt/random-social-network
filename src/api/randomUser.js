const getRandomUser = async () => {
  const request = await fetch('https://randomuser.me/api/')
  const response = await request.json()
  return response
}

export { getRandomUser }