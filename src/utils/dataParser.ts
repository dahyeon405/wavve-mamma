import type { IRestaurantData } from '@/types/interface'
import CATEGORY from '@/types/const'

const parseDataByCategories = (data: IRestaurantData[]) => {
  const dataMap = new Map()

  data.forEach((el) => {
    const category = CATEGORY.find((c) => c == el.category) ? el.category : '기타'
    if (dataMap.has(category)) dataMap.get(category).push(el)
    else dataMap.set(category, [el])
  })

  return dataMap
}

export default parseDataByCategories
