

const result = 'doksd'.match(/[oks]+?/)


const str = "yij<key>as|\n</key><key>dkeyk</key>jfl<br>jlkj;<br>jlkj;"
// const reg = /(?<=<key>)\w+/gi
const reg = /(?<=<key>)[\s\S]*?(?=<\/key>)/gi
const reg2 = /<key>(?!<\/key>+)/gi
const reg3 = /<key>([^<]*[^\/]*[^k]*[^e]*[^y]*[^>]*)<\/key>/gi
const match = str.match(reg3)
// console.log(match)
const newStr = str.replace(reg, (match) => {
  return '+++'
})

// console.log(newStr)
// console.log(match)




// 20 40 70 100
// const middle =  (100+20)/2 // 60
// const t1 = 70-(100-70)/2+(40-20)/2
// console.log(t1)

var str1 = "sdf<clear>a</clear><clear>f</clear>"
var reg1 = /(<clear>[\s\S]<\/clear>)/g
var _str1 = str1.match(reg1)
console.log(_str1)

var test1 = str1.replace(/<clear>([\s\S])<\/clear>/g, '</key>$1<key>')
console.log(test1)



var reg4 = /<clear>([\s\S])<\/clear>/
var resultStr = ''
while (reg4.test(str1)) {
  str1 = str1.replace(reg4, function (match, $1, index) {
    console.log(match, $1, index)
    return ''
  })
}

