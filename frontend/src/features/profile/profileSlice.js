import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import profileService from './profileService'

const initialState = {
  profile:null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Set Profile
export const setProfile = createAsyncThunk(
  'profile/setProfile',
  async (profileData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await profileService.setProfile(profileData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(setProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals.push(action.payload)
      })
      .addCase(setProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = profileSlice.actions
export default profileSlice.reducer