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
// Методи проходу
// Forech
console.warn('Foreach');
let arrayForeach = array.slice(0, array.length);
console.log('arrayForeach', arrayForeach);
arrayForeach.forEach(function(item, i, array){
	array[i] = 6;
	console.log('iteration =>', i, 'item =>', item);
});
console.log('array', arrayForeach, array);
// Every
console.warn('Every');
let arrayEvery = array.slice(0, array.length);
let everyResult = arrayEvery.every(function(item, i, array){
	return item > 4;
});
console.log('everyResult', everyResult);
// Some
console.warn('Some');
let arraySome = array.slice(0, array.length);
let someResult = arraySome.some(function(item, i, array){
	return item > 4;
});
console.log('someResult', someResult);
// Filter
console.warn('Filter');
let arrayFilter = array.slice(0, array.length);
let filterResult = arrayFilter.filter(function(item, i, array){
	return !(item%2);
});
console.log('filterResult', filterResult);
// Map
console.warn('Map');
let arrayMap = array.slice(0, array.length);
let mapResult = arrayMap.map(function(item, i, array){
	return item*2;
});
console.log('mapResult', mapResult);
// Reduce
console.warn('Reduce');
let arrayReduce = array.slice(0, array.length);
let reduceResult = arrayReduce.reduce(function(prevItem, item, i, array){
	return prevItem + item;
}, 100);
console.log('reduceResult', reduceResult);
// ReduceRight
console.warn('ReduceRight');
let arrayReduceRight = array.slice(0, array.length);
let reduceRightResult = arrayReduceRight.reduceRight(function(prevItem, item, i, array){
	return prevItem + item;
}, 100);
console.log('reduceRightResult', reduceRightResult);
// var array = [];
// var array = new Array([]);

var str = 'String';
var str1 = new String('String');
console.log('str', str, str1);

function Animal(name) {
  this.eats = true;
}
var animal = new Animal();
var rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;
rabbit.eats = null;
delete rabbit.eats;
animal.eats = false;

var rabbit2 = new Animal();
rabbit2.jumps = true;

console.log('Rabbit', rabbit, rabbit.jumps, rabbit.eats);
console.log('Rabbit2', rabbit2, rabbit2.jumps, rabbit2.eats);
