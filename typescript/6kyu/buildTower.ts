/**
 * Build Tower
 * 
 * Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

 * For example, a tower with 3 floors looks like this:

    [
    "  *  ",
    " *** ", 
    "*****"
    ]
 * And a tower with 6 floors looks like this:

    [
    "     *     ", 
    "    ***    ", 
    "   *****   ", 
    "  *******  ", 
    " ********* ", 
    "***********"
    ]
 * 
 * @param nFloors 
 * @returns 
 */

export const towerBuilder = (nFloors: number): string[] => {
  const width = 2 * nFloors - 1;
  const result: string[] = [];

  for (let i = 0; i < nFloors; i++) {
    const stars = "*".repeat(2 * i + 1);
    const spaces = " ".repeat((width - stars.length) / 2);
    result.push(spaces + stars + spaces);
  }

  return result;
};
