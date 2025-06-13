// Throttling in Javascript
// Used for performance optimization

// Suppose if there is a button with an onClick event that called a function which fetches API(which might be expensive). 
// Now if user keeps on clicking one after the other, so there will be several API calls made and it will impact the performance.
// What we can do is rate limiting the clicks(which is done via throttling)