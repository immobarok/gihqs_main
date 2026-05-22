import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
  user: { id: string; name: string; email: string } | null
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }: PayloadAction<{ token: string; user: AuthState['user'] }>) => {
      state.token = payload.token
      state.user  = payload.user
      localStorage.setItem('token', payload.token)
    },
    logout: (state) => {
      state.token = null
      state.user  = null
      localStorage.removeItem('token')
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer