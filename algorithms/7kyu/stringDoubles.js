exports.doubles = (s) => {
    const stack = [];

    for (const char of s) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop(); // remove the previous matching character
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}