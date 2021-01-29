import axios from 'axios'
import { toast } from 'react-toastify'

import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQDUEST,
  ORDER_CREATE_SUCCESS,
} from '../constants/orderConstants'

export const createOrder = order => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQDUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/orders', order, config)

    if (data) {
      toast.success('Your Order has been placed Successfully')
    }

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    })

    toast.error(message)
  }
}
