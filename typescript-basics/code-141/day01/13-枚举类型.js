/**
 * 枚举：使用enum定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个(一组可选值的列表)
 * 1. 枚举默认值：从0开始递增
 * 2. 枚举可以赋值
 *
 */
// 数字枚举（值是数字）
var Direct;
(function (Direct) {
    Direct[Direct["Up"] = 10] = "Up";
    Direct[Direct["Down"] = 20] = "Down";
    Direct[Direct["Left"] = 21] = "Left";
    Direct[Direct["Right"] = 22] = "Right";
})(Direct || (Direct = {}));
// 字符串枚举（值是字符串）
var Direct2;
(function (Direct2) {
    Direct2["Up"] = "up";
    Direct2["Down"] = "down";
    Direct2["Left"] = "left";
    Direct2["Right"] = "right";
})(Direct2 || (Direct2 = {}));
var left = Direct.Left;
var down = Direct.Down;
var arr = [1, 2, 3];
console.log('枚举默认值：', left, down);
