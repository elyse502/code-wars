#!/usr/bin/env tsx
const {
  var1Boolean,
  var2Decimal,
  var3Hex,
  var4Binary,
  var5Octal,
  var6String,
  var7Array,
  var8NumericArray,
  var9Tuple,
  Color,
  var10Enum,
  var11ArrayOfAny,
  var12VoidFunction,
  var13Null,
  var14Undefined,
  var15NeverFunction,
} = require("../typeScriptBasicTypes");

console.log(var1Boolean);
console.log(var2Decimal, var3Hex, var4Binary, var5Octal);
console.log(var6String);
console.log(var7Array);
console.log(var8NumericArray);
console.log(var9Tuple);
console.log(var10Enum === Color.Blue);
console.log(var11ArrayOfAny);
var12VoidFunction();
console.log(var13Null);
console.log(var14Undefined);

try {
  var15NeverFunction();
} catch (e) {
  console.log("never thrown");
}
