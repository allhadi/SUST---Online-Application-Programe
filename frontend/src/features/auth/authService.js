import axios from 'axios'

const API_URL = '/api/students/'

// Register student
const register = async (studentData) => {
  const response = await axios.post(API_URL, studentData)

  if (response.data) {
    localStorage.setItem('student', JSON.stringify(response.data))
  }

  return response.data
}

// Login student
const login = async (studentData) => {
  const response = await axios.post(API_URL + 'login', studentData)

  if (response.data) {
    localStorage.setItem('student', JSON.stringify(response.data))
  }

  return response.data
}

// Logout student
const logout = () => {
  localStorage.removeItem('student')
}


const authService = {
  register,
  login,
  logout,
}

export default authService