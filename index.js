/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return 2122177;
}

function fn() {
  return 'James';
}

function sn() {
  return 'Wicks';
}

function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function checkObject(obj){
  obj.checked = true;
}

function checkObjectInside(obj){
  if(obj.data != null){
    obj.data.checked = true;
  }
}

function arraySet(arr, i , n){
  if(arr[i]){
    arr[i] = n;
  }
}

function addAll(arr){
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    total = total + arr[i];
  }
  return total;
}

function larger(a,b){
  return a >  b ? a : b;
}

function largest(arr){
  let largest = arr[0] == null ? null : arr[0];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
      largest = arr[i];
    }
  }
  return largest;
}

function compare(a,b){
  if(a.length != b.length){
    return false;
  }

  for(let i = 0; i < a.length; i++){
    if(a[i] != b[i]){
      return false
    }
  }
  return true;
}

function addToAll(arr, n){
  if(arr){
    for(let i = 0; i < arr.length; i++){
      arr[i] = arr[i] + n;
    }
  }
  return arr;
}

let remembered;
function rememberThis(keepsake){
  remembered = keepsake; 
}

function nArray(n){
  let array = [];

  if(n){
    for(let i = 0; i < n; i++){
      array[i] = i + 1;
    }
    return array;
  }
}

function addAllOpt(arr){
  let sum = 0;
  if(arr){
    for(let i = 0; i < arr.length; i++){
      sum =  sum + arr[i];
    }
  }
  return sum;
}

function divisors(arr,div){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    
    if(arr[i] % div == 0){
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

function multiples(n,m){
  let array = []
 
  for(let i = 0; i < n; i++){
    array[i] = (i + 1) * m;
  }

  return array;
}
