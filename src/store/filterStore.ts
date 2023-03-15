import { reactive } from 'vue'

import CATEGORY from '@/consts/CATEGORY'
import type { Categories } from '@/types'

export const filterStore = reactive({
  data: new Set<string>(CATEGORY),
  changeSeletectedCategories(category: Categories) {
    if (this.data.has(category)) this.data.delete(category)
    else this.data.add(category)
  }
})
