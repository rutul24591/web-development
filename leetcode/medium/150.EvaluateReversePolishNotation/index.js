

/**
 * TC: O(n) Iterate once over array
 * SC: O(n) Usage of stack
 * Approach: 
 * Use a stack to evaluate the expression iteratively.
 * Alternatively, process the array recursively from end to start.
 * Check for invalid input conditions like not enough operands or illegal tokens.
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for(const token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token));
        }else if(isOperator(token)){
            if (stack.length < 2) throw new Error("Invalid expression: not enough operands.");

            const b = stack.pop();
            const a = stack.pop();

            const result = applyOperator(token, a, b);
            console.log(`result: `, result);
            stack.push(result);
        }else{
            throw new Error(`Invalid token encountered: "${token}"`);
        }
    }
    return stack[0];
};

function isOperator(token){
    return token === '+' || token === '-' || token === '*' || token === '/';
}

function applyOperator(operator, a, b){
    switch(operator){
        case "+": return a+b;
        case "-": return a-b;
        case "*": return a*b;
        case "/": return Math.trunc(a/b);
        default: throw new Error("Invalid expression: too many operands.");
    }
}