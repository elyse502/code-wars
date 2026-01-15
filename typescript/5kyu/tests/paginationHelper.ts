#!/usr/bin/env tsx
import PgH from "../paginationHelper";

const helper = new PgH(["a", "b", "c", "d", "e", "f"], 4);

console.log(helper.pageCount()); // 2
console.log(helper.itemCount()); // 6
console.log(helper.pageItemCount(0)); // 4
console.log(helper.pageItemCount(1)); // 2
console.log(helper.pageItemCount(2)); // -1

console.log();

console.log(helper.pageIndex(5)); // 1
console.log(helper.pageIndex(2)); // 0
console.log(helper.pageIndex(20)); // -1
console.log(helper.pageIndex(-10)); // -1
