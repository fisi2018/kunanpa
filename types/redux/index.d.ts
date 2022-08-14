import { store } from '@/stateManagement/redux/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export * from './cart.slice'
