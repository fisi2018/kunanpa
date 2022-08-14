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
      state.totalPrice += product.price
      state.totalQuantity += 1
    },
    addOneSameProduct: (state, action:PayloadAction<number>) => {
      const idProduct = action.payload
      state.products = state.products.map((item) => {
        if (item._id === idProduct) {
          state.totalPrice += item.price
          state.totalQuantity += 1
          return {
            ...item,
            quantity: item.quantity + 1
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
    clearCart: (state) => {
      state.active = initialState.active
      state.products = initialState.products
      state.totalPrice = initialState.totalPrice
      state.totalQuantity = initialState.totalQuantity
    }
  }
})
export const { addNewProduct, showCart, hideCart, removeOneProduct, addOneSameProduct, clearCart, removeAllSameProducts, removeLastOneProduct } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart
export const cartReducer = cartSlice.reducer
