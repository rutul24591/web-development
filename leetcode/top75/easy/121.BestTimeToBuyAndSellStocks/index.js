/**
 * 121. Best Time to Buy and Sell Stock
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * TC: O(n)
 * SC: O(1)
 * 
 * Idea: Use two pointers to find the min price and max profit.
 * If the current price is less than the min price, then update the min price.
 * If the current price is greater than the min price, then calculate the profit and update the max profit.
 */

function maxProfit(prices) {
    let minPrice = Infinity || 0;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice){
            minPrice = prices[i];   // Buy at the lowest price
        }else{
            maxProfit = Math.max(maxProfit, prices[i] - minPrice); // Sell at the highest price
        }
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
