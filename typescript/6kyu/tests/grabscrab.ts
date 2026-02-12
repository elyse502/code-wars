#!/usr/bin/env tsx
import { grabscrab } from "../grabscrab";

console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"])); // ["sport", "ports"]

console.log(grabscrab("oolp", ["pool", "loop", "lopo", "hello"])); // ["pool", "loop", "lopo"]

console.log(grabscrab("abc", ["def", "ghi"])); // []
