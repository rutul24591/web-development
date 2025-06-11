
// addEventListener(eventName, callback, useCapture)
//                                           |
//                                       true / false

document.querySelector('#grand-parent')
    .addEventListener('click', () => {
        console.log('Grandparent clicked');
    }, true);

document.querySelector('#parent')
    .addEventListener('click', () => {
        console.log('Parent clicked');
    }, false);

document.querySelector('#child')
    .addEventListener('click', () => {
        console.log('Child clicked');
    }, false);

/**
 * Tests
 * 
 * 1. No useCapture argument provided, so it will default to bubble i.e useCapture is false. Child is clicked
 *   Result:
 *      Child clicked
 *      Parent clicked  
 *      Grandparent clicked
 * 
 * 2. All are false explicitly. Mimic child is clicked
 *   Result:
 *      Child clicked
 *      Parent clicked  
 *      Grandparent clicked
 * 
 * 3. All are set to true, Mimic child is clicked
 *   Result:
 *      Grandparent clicked
 *      Parent clicked
 *      Child clicked
 * 
 * 4. All are set to true, Mimic Grandparent is clicked
 *   Result:
 *      Grandparent clicked
 *      
 * 5. All are set to true, Mimic Parent is clicked
 *   Result:
 *      Parent clicked
 * 
 * 6. Parent is set to true. Mimic child click. NOTE:    Follows continuous cycle Trickling(capture) then Bubble
 *   Result:
 *      Parent clicked
 *      Child clicked
 *      Grandparent clicked
 * 
 * 7. Parent is set to true. Mimic grandparent click
 *   Result:
 *      Grandparent clicked
 * 
 * 8. Parent is set to true. Mimic parent click
 *   Result:
 *      Parent clicked
 *      Grandparent clicked
 * 
 * 9. Child is set to true. Mimic child click. NOTE:    Follows continuous cycle Trickling(capture) then Bubble
 *   Result:
 *      Child clicked
 *      Parent clicked
 *      Grandparent clicked
 * 
 * 10. Child is set to true. Mimic grandparent click
 *   Result:
 *      Grandparent clicked
 * 
 * 11. Child is set to true. Mimic parent click
 *   Result:
 *      Parent clicked
 *      Grandparent clicked
 * 
 * 12. GrandParent is set to true. Mimic child click. NOTE:    Follows continuous cycle Trickling(capture) then Bubble
 *   Result:
 *      Grandparent clicked
 *      Child clicked
 *      Parent clicked
 * 
 * 13. GrandParent is set to true. Mimic grandparent click
 *   Result:
 *      Grandparent clicked
 * 
 * 14. GrandParent is set to true. Mimic parent click
 *   Result:
 *      Grandparent clicked
 *      Parent clicked
 */