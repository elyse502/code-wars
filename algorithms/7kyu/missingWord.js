exports.missingWord = (nums, str) => {
    // Remove spaces and convert to lowercase
    const lettersOnly = str.replaceAll(' ', '').toLowerCase();

    // Check if all indexes are within the string
    if (nums.some(index => index >= lettersOnly.length)) {
        return "No mission today";
    }

    // Sort indexes and build the word
    const word = nums
        .sort((a, b) => a - b)
        .map(index => lettersOnly[index])
        .join('');

    return word;
}