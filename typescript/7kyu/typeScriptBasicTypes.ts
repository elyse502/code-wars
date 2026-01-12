/**
 * Learning TypeScript. Basic Types

 * Description:
 * Learning TypeScript. Basic Types
 * Overview
  * In this kata you'll get familiar with TypeScript's basic types.
  * If you have problems solving this kata please refer to this article: https://www.typescriptlang.org/docs/handbook/basic-types.html

 * Task
 * Boolean
  * Export var1Boolean variable of boolean type with value true.
 * Number
  * Export var2Decimal variable of numeric type with decimal value 13.
  * Export var3Hex variable of numeric type with hex value f00d.
  * Export var4Binary variable of numeric type with binary value 111111.
  * Export var5Octal variable of numeric type with octal value 744.
 * String
  * Export var6String variable of string type with value Hello, world!.
 * Array
  * Export var7Array variable of array type with value [1, 'test', {a: 3}, 4, 5].
  * Export var8NumericArray variable of numeric generic array type with value [1, 2, 3, 4, 5].
 * Tuple
  * Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.

    * Export var9Tuple variable of tuple type with value ['key', 12345] - i.e. it should represent a value as a pair of a string and a number.
 * Enums
  * Export var10Enum variable with value Color.Blue from enum export enum Color {Red = 1, Green = 2, Blue = 4}.
 * Any
  * We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the any type.

    * Export var11ArrayOfAny variable of Array<any> type with value [1, 'test', {a: 3}, 4, 5].
 * Void
  * Export var12VoidFunction function that returns void.
 * Null and Undefined
  * Export var13Null variable with type and value null.
  * Export var14Undefined variable with type and value undefined.
 * Never
  * Export var15NeverFunction function that returns never value.
 * P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.
 */

const var1Boolean = true;
const var2Decimal = 13;
const var3Hex = 0xf00d;
const var4Binary = 0b111111;
const var5Octal = 0o744;

const var6String = "Hello, world!";

const var7Array = [1, "test", { a: 3 }, 4, 5];
const var8NumericArray = [1, 2, 3, 4, 5];

const var9Tuple = ["key", 12345];

const Color = { Red: 1, Green: 2, Blue: 4 };
const var10Enum = Color.Blue;

const var11ArrayOfAny = [1, "test", { a: 3 }, 4, 5];

function var12VoidFunction() {}

const var13Null = null;
const var14Undefined = undefined;

function var15NeverFunction() {
  throw new Error("Error");
}

export {
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
};
