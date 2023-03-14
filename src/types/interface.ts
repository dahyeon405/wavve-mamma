interface IRestaurantData {
  id: number
  category: string // 추후 변경
  name: string
  mainMenu: string
  price: number
  location: string
  review: string
}

export type { IRestaurantData }
