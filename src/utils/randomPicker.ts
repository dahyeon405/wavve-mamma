import type { IRestaurantData } from '../interface'

const randomPicker = (data: IRestaurantData[]) => {
  const dataLength = data.length
  const randomNum = Math.floor(Math.random() * dataLength)

  return data[randomNum]
}

export { randomPicker }
