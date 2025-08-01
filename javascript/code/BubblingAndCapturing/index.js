// addEventListener(eventName, callback, useCapture)
//                                           |
//                                       true / false

// Bubbling and capturing are the 2 ways for event propogation in the DOM tree.
// Capturing is also known as event trickling(or simple trickling)
// According to W3C model, propogation is continuous event from event capturing to event bubbling.
// Netscape suggested capture is correct way while microsoft suggested bubbling is correct way for propagation, so both are accepted.
// use event.stopPropagation

document.querySelector("#grand-parent").addEventListener(
    "click",
    (event) => {
        console.log("Grandparent clicked");
        // event.stopPropagation();
    },
    true
);

document.querySelector("#parent").addEventListener(
    "click",
    (event) => {
        console.log("Parent clicked");
        event.stopPropagation();
    },
    true
);

document.querySelector("#child").addEventListener(
    "click",
    (event) => {
        console.log("Child clicked");
        // event.stopPropagation();
    },
    true
);

/**
 * Tests
 *
 * 1. No useCapture argument provided, so it will default to bubble i.e useCapture is false. Child is clicked ✅
 *   Result:
 *      Child clicked
 *      Parent clicked
 *      Grandparent clicked
 *
 * 2. All are false explicitly. Mimic child is clicked ✅
 *   Result:
 *      Child clicked
 *      Parent clicked
 *      Grandparent clicked
 *
 * 3. All are set to true, Mimic child is clicked ✅
 *   Result:
 *      Grandparent clicked
 *      Parent clicked
 *      Child clicked
 *
 * 4. All are set to true, Mimic Grandparent is clicked ✅
 *   Result:
 *      Grandparent clicked
 *
 * 5. All are set to true, Mimic Parent is clicked ✅
 *   Result:
 *      Grandparent clicked
 *      Parent clicked
 *
 * 6. Parent is set to true. Mimic child click. NOTE:    Follows continuous cycle Trickling(capture) then Bubble ✅
 *   Result:
 *      Parent clicked
 *      Child clicked
 *      Grandparent clicked
 *
 * 7. Parent is set to true. Mimic grandparent click ✅
 *   Result:
 *      Grandparent clicked
 *
 * 8. Parent is set to true. Mimic parent click ✅
 *   Result:
 *      Parent clicked
 *      Grandparent clicked
 *
 * 9. Child is set to true. Mimic child click. ✅ NOTE:    Follows continuous cycle Trickling(capture) then Bubble
 *   Result:
 *      Child clicked
 *      Parent clicked
 *      Grandparent clicked
 *
 * 10. Child is set to true. Mimic grandparent click ✅
 *   Result:
 *      Grandparent clicked
 *
 * 11. Child is set to true. Mimic parent click ✅
 *   Result:
 *      Parent clicked
 *      Grandparent clicked
 *
 * 12. GrandParent is set to true. Mimic child click.✅ NOTE:    Follows continuous cycle Trickling(capture) then Bubble
 *   Result:
 *      Grandparent clicked
 *      Child clicked
 *      Parent clicked
 *
 * 13. GrandParent is set to true. Mimic grandparent click ✅
 *   Result:
 *      Grandparent clicked
 *
 * 14. GrandParent is set to true. Mimic parent click ✅
 *   Result:
 *      Grandparent clicked
 *      Parent clicked
 *
 * 15. All are false, child's event is stopped propagating. Mimic child is clicked ✅
 *   Result:
 *      Child clicked
 *
 * 16. All are false, parent's event is stopped propagating. Mimic child is clicked ✅
 *   Result:
 *      Child clicked
 *      Parent clicked
 *
 * 17. All are false, grandparent's event is stopped propagating. Mimic child is clicked ✅
 *   Result:
 *      Child clicked
 *      Parent clicked
 *      Grandparent clicked
 *
 * 18. All are true, child's event is stopped propagating. Mimic child is clicked ✅
 *   Result:
 *      Grandparent clicked
 *      Parent clicked
 *      Child clicked
 *
 * !!! 19. All are true, parent's event is stopped propagating. Mimic child is clicked ✅
 *   Result:
 *      Grandparent clicked
 *      Parent clicked
 *
 * 20. All are true, grandparent's event is stopped propagating. Mimic child is clicked ✅
 *   Result:
 *      Grandparent clicked
 *
 */

/** Explaination
 * 
 * 
 * Event Propagation Phases
 * 1. Capturing phase (trickling):
 * The event travels from the window down to the target element (ancestor → ... → parent → target).
 * Only listeners with useCapture: true are triggered during this phase.
 * 
 * 2. Target phase:
 * The event reaches the target element.
 * Both capturing and bubbling listeners on the target are triggered, but capturing listeners first (if any).
 * 
 * 3. Bubbling phase:
 * The event bubbles up from the target element back to the window (target → parent → ... → ancestor).
 * Only listeners with useCapture: false are triggered during this phase.

graph TD
      Window 
        |
        |
        V
    Grandparent
        |
        |
        V
      Parent
        |
        |
        V
      Child


 */
