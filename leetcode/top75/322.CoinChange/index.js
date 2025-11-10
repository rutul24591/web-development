/**
 
322. Coin Change

Medium

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
  Input: coins = [1,2,5], amount = 11
  Output: 3
  Explanation: 11 = 5 + 5 + 1

Example 2:
  Input: coins = [2], amount = 3
  Output: -1

Example 3:
  Input: coins = [1], amount = 0
  Output: 0
 

Constraints:
  1 <= coins.length <= 12
  1 <= coins[i] <= 231 - 1
  0 <= amount <= 104
 */

/** Solution 1:  Bottom-Up Dynamic Programming
 *  TC: O(amount × n)**   For each amount, we iterate over all coins
 *  SC: O(amount)**       dp array of size (amount + 1)
 * 
 * 
 * 1️⃣ Define DP State
 * Let:
 * dp[i] = minimum number of coins needed to make amount i
 * 
 * 2️⃣ Initialization
 * dp[0] = 0 → 0 coins needed to make amount 0.
 * Initialize others as infinity (or a large number), meaning not yet possible:
 * dp[i] = Infinity for all i > 0
 * 
 * 3️⃣ Transition Formula
 * For each coin c:
 * dp[i] = min(dp[i], dp[i - c] + 1)
 * 👉 If you use coin c, you add 1 to the number of coins used to make i - c.
 * 
 * 4️⃣ Result
 * After filling the dp array,
 * If dp[amount] is still Infinity, return -1
 * Else return dp[amount].
 */

var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // base case

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};


/** 
 * Solution 2:   Top-Down with Memoization
 *  TC: O(amount × n) ** Each amount is computed once, and for each amount, we iterate over all coins.
 *  SC: O(amount) ** Recursion stack + memoization table
 */

var coinChange2 = function (coins, amount) {
  const memo = new Map();

  const dfs = (remain) => {
    if (remain < 0) return Infinity;
    if (remain === 0) return 0;
    if (memo.has(remain)) return memo.get(remain);

    let minCoins = Infinity;
    for (let coin of coins) {
      minCoins = Math.min(minCoins, dfs(remain - coin) + 1);
    }

    memo.set(remain, minCoins);
    return minCoins;
  };

  const res = dfs(amount);
  return res === Infinity ? -1 : res;
};


const coins = [1, 2, 5];
const amount = 11;

console.log(coinChange(coins, amount)); // Output: 3
console.log(coinChange2(coins, amount)); // Output: 3

const coins2 = [2];
const amount2 = 3;

console.log(coinChange(coins2, amount2)); // Output: -1
console.log(coinChange2(coins2, amount2)); // Output: -1

const coins3 = [1];
const amount3 = 0;

console.log(coinChange(coins3, amount3)); // Output: 0
console.log(coinChange2(coins3, amount3)); // Output: 0