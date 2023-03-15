import type { RestaurantData } from '@/types/inde'
import CATEGORY from '@/consts/CATEGORY'

const parseDataByCategories = (data: RestaurantData[]) => {
  const dataMap = new Map()

  data.forEach((el) => {
    const category = CATEGORY.find((c) => c == el.category) ? el.category : '기타'
    if (dataMap.has(category)) dataMap.get(category).push(el)
    else dataMap.set(category, [el])
  })

  return dataMap
}

const getCandidateRestaurant = (filter: Set<string>, data: RestaurantData[]) => {
  const parsedData = parseDataByCategories(data)
  let candidates: RestaurantData[] = []
  for (const category of filter) {
    candidates = candidates.concat(...parsedData.get(category))
  }
  return candidates
}

const getRandomRestaurant = (data: RestaurantData[]) => {
  const dataLength = data.length
  const randomNum = Math.floor(Math.random() * dataLength)
  return data[randomNum]
}

export { getRandomRestaurant, getCandidateRestaurant }
