// D、O、M

// 获取元素
let cssSelecter = document.querySelector("cssSelecter");
let allCssSelecter = document.querySelectorAll("allCssSelecter");
let firstIdDiv = document.getElementById("firstId");
let allDivs = document.getElementsByTagName("div");
let firstClassDiv = getElementsByClassName("firstClass");
// 以上搜索元素的方法均可在元素上进行调用，推荐使用前两种

// 操作属性
let imgTitle = firstIdDiv.getAttribute("title");
firstIdDiv.setAttribute("title", "...title");
let hasid = firstIdDiv.hasAttribute("id");
let removeTitle = firstIdDiv.removeAttribute("title");

// 节点属性
let childNodes = firstIdDiv.childNodes;
let nodeType = firstIdDiv.nodeType;   // 1, 2, 3
let bodyName = document.body.nodeName;
let tagName = document.body.tagName;
let pValue = document.querySelector("div > p").nodeValue;
let pData = document.querySelector("div > p").data;
let textContent = firstIdDiv.textContent;
let firstChild = firstIdDiv.firstChild;
let lastChild = firstIdDiv.lastChild;
// 获得一个元素对象，这个元素对象有很多属性和可以对它进行操作的方法
// 这句话是关键，当你在html中写下一个标签，标签内写了某属性例如href、src等
// 那么获得这个标签，通过直接标签.属性即可获取，思路便是这个思路
// 因为属性有非常多，所以从节点树以及对象的角度来思考记忆较好

// 修改文档
let div = document.createElement("div");
let textNode = document.createTextNode("Here I am");
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
document.body.prepend(div);   // 更多插入方法自行查询
querySelector("p").append(textContent);
querySelectorAll("p")[1].remove()

// 样式和类
let bodyy = document.getElementsByTagName("body");
bodyy.style.background = "black";
// DOM无法获取外部CSS设置的样式
// 通过DOM改变样式，推荐事先通过className设置好样式，DOM改变className即可
// 有一种应用大概是CSS永远也无法与DOM竞争的：JS脚本能定时重复执行一组操作。通过不断改变样式，我们就能实现CSS根本不可能实现的效果

// 事件
// element.addEventListener(event, handler[, options]);
// element.removeEventListener(event, handler[, options]);