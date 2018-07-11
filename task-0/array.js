'use strict';
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('length' , array);
// Методи доступу
// Slice
console.warn('Slice');
let arraySlice = array.slice(2, 4);
console.log('arraySlice', arraySlice);
// Concat
console.warn('Concat');
let arrayConcat = array.concat(arraySlice);
console.log('arrayConcat', arrayConcat);
// Includes
console.warn('Includes');
let arrayIncludes1 = array.includes(5, 0);
let arrayIncludes2 = array.includes(9, 0);
console.log('arrayIncludes', arrayIncludes1, arrayIncludes2);
// Join
console.warn('Join');
let arrayJoin = array.join(', ');
console.log('arrayJoin', arrayJoin, typeof arrayJoin, typeof array);
// Split
console.warn('Split');
let arraySplit = arrayJoin.split(', ', 4);
console.log('arraySplit', arrayJoin, '=>',  arraySplit, typeof arraySplit);
// To string
console.warn('To string');
let arrayToString = array.toString();
console.log('arrayToString', arrayToString);
// IndexOf
console.warn('Index Of');
let arrayIndexOf = array.indexOf(5);
console.log('arrayIndexOf', array, '=> 5 index = ', arrayIndexOf);
// LastIndexOf
console.warn('Last Index Of');
let arrayLastIndexOf = array.lastIndexOf(5);
console.log('arrayLastIndexOf', array, '=> 5 index = ', arrayLastIndexOf);
// Методи змінюючі масив
// Fill
console.warn('Fill');
let arrayFill = array.slice(0, array.length);
console.log('arrayFill', array, arrayFill.fill(5));
// Pop
console.warn('Pop');
let arrayPop = array.slice(0, array.length);
let arrayPopResult = arrayPop.pop();
console.log('arrayPop', array, arrayPop, arrayPopResult);
// Shift
console.warn('Shift');
let arrayShift = array.slice(0, array.length);
let arrayShiftResult = arrayShift.shift();
console.log('arrayShift', array, arrayShift, arrayShiftResult);
// Push
console.warn('Push');
let arrayPush = array.slice(0, array.length);
let arrayPushResult = arrayPush.push(0, 1, 2, 3);
console.log('arrayPush', array, arrayPush, arrayPushResult);
// Unshift
console.warn('Unshift');
let arrayUnshift = array.slice(0, array.length);
let arrayUnshiftResult = arrayUnshift.unshift(0, 1, 2, 3);
console.log('arrayUnshift', array, arrayUnshift, arrayUnshiftResult);
// Reverse
console.warn('Reverse');
let arrayReverse = array.slice(0, array.length);
let arrayReverseResult = arrayReverse.reverse();
console.log('arrayReverse', array, arrayReverse, arrayReverseResult);
// Sort
console.warn('Sort');
let arraySort = arrayUnshift.slice(0, arrayUnshift.length);
let arraySortResult = arraySort.sort((a, b) => { return b - a; });
console.log('arraySort', array, arraySort, arraySortResult);
// Splice
console.warn('Splice');
let arraySplice = array.slice(0, array.length);
let arraySpliceResult = arraySplice.splice(3, 3, 11, 12, 13, 14);
console.log('arraySplice', array, arraySplice, arraySpliceResult);
// Delete
// console.warn('Delete');
// let arrayDelete = array.slice(0, array.length);
// delete arrayDelete[3];
// console.log('arrayDelete', array, arrayDelete);

