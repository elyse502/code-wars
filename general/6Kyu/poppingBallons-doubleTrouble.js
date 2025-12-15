/**
 * Popping Balloons: Double Trouble
 * 
 * Task
 * Balloons drift from left to right toward you, and you stand on the right firing volleys of arrows. Each step, you shoot n arrows at the closest balloons on your side, then watch the whole line change before the next volley. After k such steps, return the surviving balloons as a string.

 * Input:
    * s: initial string of balloons (w,b,g,r,W,B,G,R).
    * n: arrows fired per step.
    * k: number of steps to simulate.
 * Output: Final balloon string (compact, no gaps).
 * Per step:
    * Target the n rightmost balloons, or fewer if less than n balloons remain.
    * Hit each once; apply effects at end of step.
 * Notes:
    * All balloons start with 0 hits.
    * Each balloon tracks hits independently.
    * Balloons always stay compact—no spaces form when some pop, transform or split.
 * Constraints:
    1 <= n <= 8
    0 <= k <= 1000
    0 <= length of s <= 200
 * Regular Balloons
 * Regular balloons take 1 hit and either pop, transform, or split.

    Balloon	Effect
    White (w)	pops
    Black (b)	→ w
    Green (g)	→ ww
    Red (r)	→ bb
 * Fortified Balloons
 * Fortified balloons require two hits: first hit becomes regular with * suffix; second hit reacts like regular equivalent, but transformations/splits produce fortified equivalents.

    Balloon	1st Hit	2nd Hit
    White (W)	→ w*	pops
    Black (B)	→ b*	→ W
    Green (G)	→ g*	→ WW
    Red (R)	→ r*	→ BB
    Examples
    s = "wbb", n=3, k=1 → "ww"
    s = "wbb", n=2, k=1 → "www"
    s = "wbb", n=1, k=1 → "wbw"
    s = "wbb", n=1, k=2 → "wb"
    s = "wbb", n=2, k=2 → "w"
    s = "wbb", n=2, k=3 → ""

    s = "RG", n=3, k=1 → "r*g*"
    s = "RG", n=3, k=2 → "BBWW"
    s = "RG", n=3, k=3 → "Bb*w*w*"
    s = "RG", n=3, k=4 → "BW"
    s = "RG", n=3, k=5 → "b*w*"
    s = "RG", n=3, k=6 → "W"
    s = "RG", n=3, k=7 → "w*"
    s = "RG", n=3, k=8 → ""
 * 
 * @param {*} s 
 * @param {*} n 
 * @param {*} k 
 * @returns 
 */

exports.solve = (s, n, k) => {
  if (!s || k === 0) return s;

  let balloons = s.split("");

  const regularEffect = (c) => {
    if (c === "w") return [];
    if (c === "b") return ["w"];
    if (c === "g") return ["w", "w"];
    if (c === "r") return ["b", "b"];
    return [];
  };

  const fortifiedEffect = (c) => {
    if (c === "w") return [];
    if (c === "b") return ["W"];
    if (c === "g") return ["W", "W"];
    if (c === "r") return ["B", "B"];
    return [];
  };

  for (let step = 0; step < k && balloons.length; step++) {
    let hits = Math.min(n, balloons.length);
    let start = balloons.length - hits;
    let next = [];

    for (let i = 0; i < balloons.length; i++) {
      let c = balloons[i];

      if (i < start) {
        next.push(c);
        continue;
      }

      if (c === c.toUpperCase()) {
        next.push(c.toLowerCase() + "*");
      } else if (c.endsWith("*")) {
        let base = c[0];
        let out = fortifiedEffect(base);
        next.push(...out);
      } else {
        let out = regularEffect(c);
        next.push(...out);
      }
    }

    balloons = next;
  }

  return balloons.join("");
};
