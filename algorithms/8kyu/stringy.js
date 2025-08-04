function stringy(size) {
    return Array(size).fill(0).map((_, index) => index % 2 === 0 ? '1' : '0').join('');
}