// Throttling in Javascript
// Used for performance optimization

// Suppose if there is a button with an onClick event that called a function which fetches API(which might be expensive).
// Now if user keeps on clicking one after the other, so there will be several API calls made and it will impact the performance.
// What we can do is rate limiting the clicks(which is done via throttling)

function throttle(func, delay) {
    let lastExecutedTime = 0;
    console.log(`lastExecutedTime: ${lastExecutedTime}`);

    return function (...args) {
        const currentTime = Date.now();

        if (currentTime - lastExecutedTime >= delay) {
            console.log(
                `Call: ${currentTime}, lastExecutedTime: ${lastExecutedTime}`
            );
            func.apply(this, args);
            lastExecutedTime = currentTime;
        }
    };
}

// Usage example:
function handleScroll() {
    console.log("Scrolling...");
}

const throttledScrollHandler = throttle(handleScroll, 1200); // Execute at most once every 200ms

window.addEventListener("scroll", throttledScrollHandler);

// React Throttle hook

// const useThrottle = (func, delay) => {
//   let timeout = null;
//   return (...args) => {
//     if (timeout) {
//       return;
//     }
//     func(...args);
//     timeout = setTimeout(() => {
//       timeout = null;
//     }, delay);
//   };
// };

// export default useThrottle;
