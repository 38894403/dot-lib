

function Promise(excutor) {
	let _ = this;
	_.state = "pending"
	_.value = undefined;
	_.reason = undefined;
	_.resolveCallbacks = [];
	_.rejectCallbacks = [];
	function resolve(value) {
		_.value = value;
		_.state = "fulfilled";
		_.resolveCallbacks.forEach((fn) => fn())
	}
	function reject(reason) {
		_.reason = reason;
		_.state = "faild";
		_.rejectCallbacks.forEach((fn) => fn())
	}
	excutor(resolve, reject);
}

Promise.prototype.then = function (onFulfilled, onReject) {
	let _ = this;
	if (_.state === "pending") {
		_.resolveCallbacks.push(() => {
			onFulfilled(_.value);
		})
		_.rejectCallbacks.push(() => {
			onReject(_.reason)
		})
	}
	if (_.state === "fulfilled") {
		onFulfilled(_.value);
	}
	if (_.state === "faild") {
		onReject(_.reason)
	}
}


Promise.all = arr => {
	let aResult = [];    //用于存放每次执行后返回结果
	return new _Promise(function (resolve, reject) {
		let i = 0;
		next();    // 开始逐次执行数组中的函数(重要)
		function next() {
			arr[i].then(function (res) {
				aResult.push(res);    // 存储每次得到的结果
				i++;
				if (i == arr.length) {    // 如果函数数组中的函数都执行完，便resolve
					resolve(aResult);
				} else {
					next();
				}
			})
		}
	})
};

Promise.race = function (promises) {
	if (!Array.isArray(promises)) {
		throw new TypeError('You must pass array')
	}

	return new Promise(function (resolve, reject) {
		function resolver(value) {
			resolve(value)
		}

		function rejecter(reason) {
			reject(reason)
		}

		for (var i = 0; i < promises.length; i++) {
			promises[i].then(resolver, rejecter)
		}
	})
}


// var a = new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		resolve(666)
// 	},1000)
// }).then(function(res){
// 	console.log(res)
// }) 



var arr = [4, 2, 3, 4, 5]
var result = arr.reduce(function (sum, item, index, arr) {
	// console.log(sum,item)
	// return item
})
// console.log(result)



// function format(num) {
//   var str = num+'';
//   return str.split("").reverse().reduce((prev, next, index) => {
//     return ((index % 3) ? next : (next + ',')) + prev;
//   })
// }

function format1(num) {
	var str = String(num);
	return str.split("").reverse().reduce(function (prev, next, index) {
		return ((index % 3) ? next : (next + ",")) + prev
	})
}
function format(num) {
	var reg = /\d{1,3}(?=(\d{3})+$)/g;
	return (num + '').replace(reg, '$&,');
}
console.log(format(12345678));




var thousand = ("" + 1234567).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
// console.log(thousand)




console.log('-------------')


function Foo() {
	var i = 0;
	return function () {
		console.log(i++);
	}
}

var f1 = Foo(),
	f2 = Foo();

// f1();
// f1();
// f2();

/*node=============================*/
const fs = require('fs');
const path = require('path');
const readDir = (entry) => {
	const dirInfo = fs.readdirSync(entry);
	dirInfo.forEach(item => {
		const location = path.join(path.dirname(entry), item);
		const info = fs.statSync(location);

		console.log(location);
	})
	// console.log(dirInfo);
}

// readDir(__dirname);



console.log(Date.now())
console.log('   adf   '.trim())




/*****   防抖 */
function debounce(fn, delay) {
	let timer = null //借助闭包
	return function () {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(fn, delay) // 简化写法
	}
}

/** 节流 */
function throttle(fn, delay) {
	let valid = true
	return function () {
		if (!valid) {
			//休息时间 暂不接客
			return false
		}
		// 工作时间，执行函数并且在间隔期内把状态位设为无效
		valid = false
		setTimeout(() => {
			fn()
			valid = true;
		}, delay)
	}
}

