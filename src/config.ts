// 👇 constant value in all uppercase
export const FREE_QUOTA = {
  maxEventsPerMonth: 10,
  maxEventCategories: 3,
} as const

export const PRO_QUOTA = {
  maxEventsPerMonth: 10000,
  maxEventCategories: 10,
} as const
