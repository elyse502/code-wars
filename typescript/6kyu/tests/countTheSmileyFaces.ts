#!/usr/bin/env tsx
import { countSmileys } from "../countTheSmileyFaces";

console.log(countSmileys([":)", ";(", ";}", ":-D"])); // 2
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // 3
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // 1
console.log(countSmileys([])); // 0
