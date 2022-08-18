import { CartState, ProductState, RootState } from '@/types/redux'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: CartState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
  active: false
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    hideCart: (state) => {
      state.active = false
    },
    showCart: (state) => {
      state.active = true
    },
    addNewProduct: (state, action: PayloadAction<ProductState>) => {
      const product = action.payload
      state.products.push(product)
      state.totalPrice += product.price * product.quantity
      state.totalQuantity += product.quantity
    },
    addSameProduct: (state, action:PayloadAction<ProductState>) => {
      const product = action.payload
      state.products = state.products.map((item) => {
        if (item._id === product._id) {
          state.totalPrice += item.price * product.quantity
          state.totalQuantity += product.quantity
          return {
            ...item,
            quantity: item.quantity + product.quantity
          }
        }
        return item
      })
    },
    removeLastOneProduct: (state, action:PayloadAction<number>) => {
      state.products.filter((item) => {
        if (item._id === action.payload) {
          state.totalPrice -= item.price
          state.totalQuantity -= 1
          return false
        }
        return true
      }
      )
    },
    removeOneProduct: (state, action:PayloadAction<number>) => {
      const idProduct = action.payload
      state.products = state.products.map((product) => {
        if (product._id === idProduct) {
          state.totalPrice -= product.price
          state.totalQuantity -= 1
          return {
            ...product,
            quantity: product.quantity - 1
          }
        }
        return product
      })
    },
    removeAllSameProducts: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((item) => {
        if (item._id === action.payload) {
          state.totalPrice -= item.price * item.quantity
          state.totalQuantity -= item.quantity
          return false
        }
        return true
      }
      )
    },
    clearCart: () => {
      return initialState
    }
  }
})
export const { addNewProduct, showCart, hideCart, removeOneProduct, addSameProduct, clearCart, removeAllSameProducts, removeLastOneProduct } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart
export const cartReducer = cartSlice.reducer
