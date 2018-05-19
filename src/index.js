console.log(666)

// 使用package.json内部变量
// console.log(process.env)
// console.log(process.env.npm_lifecycle_event)
// console.log(process.env.npm_package_name)

// npm脚本自带两个顺序钩子，'pre' 和 'post'

// "predev":"node test_one.js",
// "dev":"node test_two.js",
// "postdev":"node test_three.js"
// 当执行 npm run dev 的时候默认就会执行

// npm run predev && npm run dev && npm run postdev