import axios from 'axios'

const API_URL = '/api/profile/'

// Set Profile
const setProfile = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, profileData, config)

  return response.data
}


const profileService = {
  setProfile
}

export default profileService