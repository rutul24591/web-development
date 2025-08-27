// Event delegation is a proper way to handle events efficiently.

// Consider an e-commerce website which lists categories and has several categories within like Laptops,
// Cameras, Accessories, Mobile phone, PCs, etc. On clicking each of these we are routed to /laptops, /cameras, etc,
// which lists different products within the selected category.
// Now adding event listeners on each would make it very cumbersome and inefficient, because an e-commerce page might have
// 100s or 1000s of items and attaching event listeners to each with bubbling and capturing is not feasible.
// So event delegation comes into picture.

// For above example what we can do is attach a single event listener on the parent,
// as each click on item will bubble up to parent

// PROS:
// 1. Single event instead of many, so saves lot of memory
// 2. Less code
// 3. Dom manipulation. Even if New children are added to categories no extra event needs to be added.

// CONS:
// 1. All events are not bubbled up like blur, focus, resize, scroll ( lot of risk so they do not). Need to handle explicitly
// 2. To use event delegation, we cannot use stopPropagation and let the events bubble up.

/**
 * 
 * 
 *          <ul id="category">
                <li id="laptops">Laptops</li>
                <li id="cameras">Cameras</li>
                <li id="accessories">Accessories</li>
                <li id="mobiles">Mobile Phone</li>
            </ul>
 * 
 */

// event.target.id will help you identify the clicked element.

document.querySelector("#category").addEventListener(
    "click",
    (event) => {
        console.log("Category parent clicked", event.target.id);
        console.log(event.target);

        // Navigate now after getting id. Not a good way.
        // Consider the list has many different element which are not to be routed.

        // window.location.href = "/" + event.target.id;

        // Navigate only when it is <li> element
        if (event.target.tagName === "li") {
            window.location.href = "/" + event.target.id;
        }
    },
    false
);

document.querySelector("#form").addEventListener("keyup", (event) => {
    console.log(`Event Target: `, event.target);
    if (event.target.dataset.uppercase !== undefined) {
        event.target.value = event.target.value.toUpperCase();
    }
});
