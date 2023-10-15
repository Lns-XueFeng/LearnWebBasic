"use strict";

// 变量
let name = "Lns-XueFeng";
let time = "2023-10-06";
let location = "In school";

let t1 = "t1", t2 = "t2", t3 = "t3";

let v1, v2, v3;
v1 = "v1";
v2 = "v2";
v3 = "v3";

// 常量
const COLOR_RED = "#F00";
const BEGIN_TIME = 0;

function pageLoadTimeCount() {
	return null;
}

const pageLoadTime = pageLoadTimeCount();

// 数据类型
let number = 21.1314;                                          // Number类型
const bigInt = 1234567890123456789012345678901234567890n;      // BigNumber类型
let string = 'string'; string = "string"; string = `string`;   // String类型
let isGreater = 4 > 1;                                         // Boolean类型
let age = null;                                                // null类型
let pig;                                                       // undefine类型
// object数据类型                                               // object类型

// 运算符
let addResult = 1 + 1;
let subResult = 1 - 1;
let mulResult = 1 * 1;
let divResult = 1 / 1;
let ottResult = 1 % 1;
let gmmResult = 2 ** 2;
let combine = "i" + "love" + "you";
let selfAdd = addResult++;   // ++addResult
let selfSub = subResult--;   // --subResult

let Greater = 4 > 1;
let Smaller = 1 < 4;
let Same = 4 == 4;

let tr = true, fa = false, result;
result = tr || fa;
result = tr && fa;
result = !tr == fa;


// 数据结构
let strings = "I love you";   // 字符串以及其相关操作
let hello = `I will say that ${strings}`;
let stringLen = hello.length;
let firstChar = strings[0];
let upper = hello.toUpperCase();
let lower = hello.toLowerCase();
let matchResult = "i love you".includes("love");
let startResult = "i love you".startsWith("i");
let endResult = "i love you".endsWith("you");

let arr1 = new Array()       // 数组以及其相关操作
let arr2 = [1, 2, 3, 4, 5, 6];
let first = arr2[0], second = arr2[1], last = arr2.at(-1);
arr2[0] = -1;
arr2[1] = -2;
arr2[2] = -3;
arr2.push(10);     // 从数组尾添加
let arr2Poped = arr2.pop();
arr2.unshift(0);   // 从数组头添加
let arr2Shifted = arr2.shift();
let arrLength = arr2.length;

let map1 = new Map();        // 映射以及其相关操作
map1.set("mname", "Lns-XueFeng");
map1.set("mtime", "-----------");
let mname = map1.get("mname");
let mtime = map1.get("mtime");
let isExists = map1.has("name");
map1.delete("time");
map1.clear();
let mapSize = map1.size;
let map2 = new Map([
	["name", "Lns-XueFeng"], 
	["time", "-----------"],
]);
let keysIterableObject = map2.keys();
let ValuesIterableObject = map2.values();
let entriesIterableObject = map2.entries();

let set = new Set();        // 集合以及其相关操作
set.add("Lns-XueFeng");
set.add("Lns-XueFeng");
set.add("Lns-XueFeng");
let setSize = set.size;
let ValuesIterableObject1 = set.keys();
let ValuesIterableObject2 = set.values();
let ValuesIterableObject3 = set.entries();

// 控制语句
let year = prompt("Input a year number: ");
if (year == 2023) 
{
    alert("yes, is 2023");
}

if (year == 2022)
{
	alert("yes, is 2022");
}
else if (year == 2021)
{
	alert("yes, is 2021");
}
else if (year == 2020)
{
	alert("yes, is 2020");
}
else {
	alert("no, should >= 2020");
}

switch (year)   // 注意break
{
	case 2023: 
	    alert("yes, is 2023"); 
	    break;
	case 2022: 
	    alert("yes, is 2022"); 
	    break;
	case 2021: 
	    alert("yes, is 2021"); 
	    break;
	case 2020:
	    alert("yes, is 2020"); 
	    break;
	default:
		alert("no, should >= 2020");
}

// 循环语句
let user = {   // 建立对象
	name: "John",
	age: 30,
	isAdmin: true
};

for (let key in user) {         // 用于遍历对象属性
	alert(key);
	alert(user[key]);
}

let fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits) {     // 用于遍历数组和可迭代对象的循环
    alert( fruit );
}

for (let i = 0; i < 3; i++) {   // 普通for循环
    alert(i);
}

let i1 = 0;

while (i1 < 3) { 
    alert( i1 );
    i1++;
}

let i2 = 0;

do {
    alert( i2 );
    i2++;
} while (i2 < 3);

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');

    if (!input) break outer;
  }
}   // break可以跳出循环以及跳转至标签处，continue可以跳出本次循环

// 函数
function myFirstJsFunc(words) {
	alert(words);
	return words;
}

let mySecondJsFunc = function(words) {
	return words;
}

let sum1 = (a, b) => a + b;
let sum2 = (a, b) => {
	return a + b;
}

// 对象
let user1 = {};
let user2 = new Object();

let book1 = {
	title: "禅与摩托车维修指南",
	author: "波西格",
}
let book2 = new Object();
book2.title = "禅与摩托车维修指南";
book2.author = "波西格";

let music1 = {
	title: "dram",
	sayLove: function() {
		alert(`I love to hear ${this.title}`);
	},
}
let music2 = new Object();
music2.title = "dram";
music2.sayLove = function() {
	alert(`I love to hear ${this.title}`);
}

let bookTitle = book1.title;
let musicTitle = music1.title;
music1.sayLove();

// 类
class User {
	hair = true;

	constructor(name) {
		this.name = name;
	}

	sayLove() {
		alert(`I love ${this.name}`);
	}
}

let users = new User("Lns-XueFeng");
let hasHair = users.hair;
let names = users.name;
users.sayLove();

class WomenUser extends User {
	constructor(name, habit) {
		super(name);
		this.habit = habit;
	}

	Say123() {
		alert(`${this.name}, 老子数到三...`);
	}
}

let wusers = new WomenUser("Lns-XueFeng", "program");
let whasHair = wusers.hair;
let wnames = wusers.name;
let whabits = wusers.habit;
wusers.Say123();

// 错误处理
try {
	alert("try to run some code...");
} catch (err) {
	alert(`found ${err}`);
}

try {
   	alert("try to run some code...");
} catch (err) {
   	alert(`found ${err}`);
} finally {
   	alert("finally, always to run...");
}

let message = "found a error";
let error = new Error(message);
let syntaxError = new SyntaxError(message);
let referenceError = new ReferenceError(message);

throw error;
throw syntaxError;
throw referenceError;
