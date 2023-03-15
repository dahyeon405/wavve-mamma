type Categories = '한식' | '일식' | '양식' | '중식' | '분식' | '음료' | '기타'

interface RestaurantData {
  id: number
  category: Categories
  name: string
  mainMenu: string
  price: number
  location: string
  review: string
}

export type { RestaurantData, Categories }
