//
//
//

type ItemType = {
  weight: number
  value: number
}
export const knapsack = (items: ItemType[], capacity: number) => {
  const length = items.length
  const dp = Array(length + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0))

  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (items[i - 1].weight > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - items[i - 1].weight] + items[i - 1].value
        )
      }
    }
  }

  return dp[length][capacity]
}
