import { configureStore } from '@reduxjs/toolkit'
import info from './Slices/SliceUser'

export default configureStore({
  reducer: {
    forUser: info,
  },
})
