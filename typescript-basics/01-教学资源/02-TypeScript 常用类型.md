# TypeScript 常用类型

## 类型注解

**目标：**能够理解什么是ts的类型注解

**内容：**

示例代码：

```ts
let age: number = 18
```

> 代码中的 `: number` 就是**类型注解**

- 作用：**为变量添加类型约束**。比如，上述代码中，约定变量 age 的类型为 number 类型
- 解释：**约定了什么类型，就只能给变量赋值该类型的值，否则，就会报错**

```ts
// 错误演示

// 错误原因：将 string 类型的值赋值给了 number 类型的变量，类型不一致
let age: number = '18'
```

## 原始类型

**目标：**能够理解ts中原始类型的使用

**内容：**

> 可以将 TS 中的常用基础类型细分为两类：1 JS 已有类型 2 TS 新增类型

1. JS 已有类型

   - 原始类型：`number/string/boolean/null/undefined/symbol`

   - 对象类型：`object`（包括，数组、对象、函数等对象）

2. TS 新增类型
   - 联合类型、自定义类型(类型别名)、接口、元组、字面量类型、枚举、void、any 等
   - 注意：
     - *原始类型*在 TS 和 JS 中写法一致
     - *对象类型*在 TS 中更加细化，每个具体的对象（比如，数组、对象、函数）都有自己的类型语法

首先，我们先来看原始类型：

- 原始类型：number/string/boolean/null/undefined/symbol
- 特点：简单，这些类型，完全按照 JS 中类型的名称来书写

```ts
let age: number = 18
let myName: string = '黑马程序员'
let isLoading: boolean = false
let nullValue: null = null
let undefinedValue: undefined = undefined

// 特点：Symbol() 创建的值是唯一的
// 作用：可以作为对象属性的键，防止与对象中其他键冲突
let uniqKey: symbol = Symbol()

let obj = {
  a: '123',
  [uniqKey]: 100,
}
// 取值：
console.log(obj[uniqKey])

```

##  数组类型

**目标：**掌握ts中数组类型的两种写法

**内容：**

- 数组类型有以下两种写法，推荐使用 `number[]` 写法

```ts
// 写法一：（推荐）
let numbers: number[] = [1, 3, 5]

// 写法二：
let strings: Array<string> = ['a', 'b', 'c']
```

## 联合类型

**目标：**能够通过联合类型将多个类型组合成一个类型

**内容：**

> 需求：数组中既有 number 类型，又有 string 类型，这个数组的类型应该如何写?

```ts
// 此处 () 的目的是为了将提升优先级，表示：number 类型的数组或 string 类型的数组
let arr: (number | string)[] = [1, 'a', 3, 'b']
```

- 解释：`|`（竖线）在 TS 中叫做**联合类型**，即：由两个或多个其他类型组成的类型，表示可以是这些类型中的**任意一种**
- 注意：这是 TS 中联合类型的语法，**只有一根竖线**，不要与 JS 中的或（|| 或）混淆了

```ts
// 思考：该类型的含义？
let arr: number | string[]
```

## 类型别名

**目标：**能够使用类型别名给类型起别名

**内容：**

- `类型别名（自定义类型）`：为任意类型起别名
- 使用场景：当同一类型（复杂）被多次使用时，可以通过类型别名，**简化该类型的使用**

```ts
type CustomArray = (number | string)[]

let arr1: CustomArray = [1, 'a', 3, 'b']
let arr2: CustomArray = ['x', 'y', 6, 7]
```

- 解释:
  1. 使用 `type` 关键字来创建自定义类型
  2. 类型别名（比如，此处的 *CustomArray*）可以是任意合法的变量名称
  3. 推荐使用大写字母开头
  4. 创建类型别名后，直接使用该类型别名作为变量的类型注解即可

## 函数类型-参数和返回值

**目标：**能够给函数指定类型

**内容：**

- 函数的类型实际上指的是：`函数参数`和`返回值`的类型
- 为函数指定类型的两种方式：
  1. 单独指定参数、返回值的类型
  2. 同时指定参数、返回值的类型

1. 单独指定参数、返回值的类型：

```ts
// 函数声明
function add(num1: number, num2: number): number {
  return num1 + num2
}

// 箭头函数
const add = (num1: number, num2: number): number => {
  return num1 + num2
}
```

2. 同时指定参数、返回值的类型:
   - 解释：当函数作为表达式时，可以通过类似箭头函数形式的语法来为函数添加类型
   - 注意：这种形式只适用于函数表达式

```ts
// 创建函数自定义类型
type AddFn = (num1: number, num2: number) => number

// 使用自定义类型作为函数 add 的类型
const add: AddFn = (num1, num2) => {
  return num1 + num2
}
```

## 函数类型-void 类型

**目标：**能够了解void类型的使用

**内容：**

- 如果函数没有返回值，那么，函数返回值类型为：`void`

```ts
function greet(name: string): void {
  console.log('Hello', name)
}
```

- 注意：如果一个函数没有返回值，此时，在 TS 的类型中，应该使用 `void` 类型
- 注意：不要与 undefined 类型混淆

```ts
// 如果什么都不写，此时，add 函数的返回值类型为： void
const add = () => {}
// 这种写法是明确指定函数返回值类型为 void，与上面不指定返回值类型相同
const add = (): void => {}

// 但，如果指定 返回值类型为 undefined，此时，函数体中必须显示的 return undefined 才可以
const add = (): undefined => {
  // 此处，返回的 undefined 是 JS 中的一个值
  return undefined
}
```

## 函数类型-可选参数

**目标：**能够给函数设置可选参数类型

**内容：**

- 使用函数实现某个功能时，参数可以传也可以不传。这种情况下，在给函数参数指定类型时，就用到**可选参数**了
- 比如，数组的 slice 方法，可以 `slice()` 也可以 `slice(1)` 还可以 `slice(1, 3)`

```ts
function mySlice(start?: number, end?: number): void {
  console.log('起始索引：', start, '结束索引：', end)
}
```

- 可选参数：在可传可不传的参数名称后面添加 `?`（问号）
- 注意：**可选参数只能出现在参数列表的最后**，也就是说可选参数后面不能再出现必选参数
- 注意：参数默认值和可选参数互斥的，一般只需要指定一种即可
  - 注意：如果参数有默认值，那么该参数默认就是可选的

## 对象类型

**目标：**掌握对象类型的基本使用

**内容：**

- JS 中的对象是由属性和方法构成的，而 **TS 对象的类型就是在描述对象的结构**（有什么类型的属性和方法）
- 对象类型的写法:

```ts
// 空对象
let person: {} = {}

// 有属性的对象
let person: { name: string } = {
  name: '黑马程序员'
}

// 既有属性又有方法的对象
// 在一行代码中指定对象的多个属性类型时，使用 `;`（分号）来分隔
let person: { name: string; sayHi(name: string): void } = {
  name: 'jack',
  sayHi(name) {}
}

// 对象中如果有多个类型，可以换行写：
// 通过换行来分隔多个属性类型，可以去掉 `;`
let person: {
  name: string
  sayHi(): void
} = {
  name: 'jack',
  sayHi() {}
}
```

- 解释：
  1. 使用 `{}` 来描述对象结构
  2. 属性采用`属性名: 类型`的形式
  3. 方法采用`方法名(参数: 参数的类型): 返回值类型`的形式

## 对象类型-使用类型别名

- 注意：直接使用 `{}` 形式为对象添加类型，会降低代码的可读性（不好辨识类型和值）
- 推荐：**使用类型别名为对象添加类型**

```ts
// 创建类型别名
type Person = {
  name: string
  sayHi(): void
}

// 使用类型别名作为对象的类型：
let person: Person = {
  name: 'jack',
  sayHi() {}
}
```

## 对象类型-带有参数的方法类型

- 如果方法有参数，就在方法名后面的小括号中指定参数类型

```ts
type Person = {
  greet(name: string): void
}

let person: Person = {
  greet(name) {
    console.log(name)
  }
}
```

## 对象类型-箭头函数形式的方法类型

- 方法的类型也可以使用箭头函数形式

```ts
type Person = {
  greet: (name: string) => void
}

let person: Person = {
  greet(name) {
    console.log(name)
  }
}
```

## 对象类型-对象可选属性

- 对象的属性或方法，也可以是可选的，此时就用到**可选属性**了
- 比如，我们在使用 `axios({ ... })` 时，如果发送 GET 请求，method 属性就可以省略
- 可选属性的语法与函数可选参数的语法一致，都使用 `?` 来表示

```ts
type Config = {
  url: string
  method?: string
}

function myAxios(config: Config) {
  console.log(config)
}
```

## == 对象类型-练习 ==

```ts
// 创建一个对象：学生对象，该对象中具有以下属性和方法：
//	1 属性：姓名、性别、成绩、身高
// 	2 方法：学习、打游戏
```

## 对象类型-接口

**目标**：能够使用接口类型来为对象指定类型

**内容**：

> 当一个对象类型被多次使用时，也可以使用接口（`interface`）来描述对象的类型，达到复用的目的

解释：
- 使用 `interface` 关键字来声明接口

- 接口名称(比如，此处的 IPerson)，可以是任意合法的变量名称，推荐以 `I` 开头

- 声明接口后，直接使用接口名称作为变量的类型

- 因为每一行只有一个属性类型，因此，属性类型后没有 ;(分号)

```ts
interface IPerson {
  name: string
  age: number
  sayHi(): void
}

let person: IPerson = {
  name: 'jack',
  age: 19,
  sayHi() {}
}
```

## 对象类型-interface vs type

**目标**：能够理解interface和type的相同点和不同点

**内容**：

interface（接口）和 type（类型别名）的对比：

- 相同点：都可以给对象指定类型
- 不同点:
  - 接口，只能为对象指定类型
  - 类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名

注意：interface 和 type 在使用上还有其他的不同之处，请[参考文档](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)说明

约定：**能使用 type 就是用 type**

```ts
interface IPerson {
  name: string
  age: number
  sayHi(): void
}

// 为对象类型创建类型别名
type IPerson = {
  name: string
  age: number
  sayHi(): void
}

// 为联合类型创建类型别名
type NumStr = number | string
```

## 对象类型-接口继承

**目标**：能够通过接口继承实现复用

**内容**：

> 如果两个接口之间有相同的属性或方法，可以将**公共的属性或方法抽离出来，通过继承来实现复用**

比如，这两个接口都有 x、y 两个属性，重复写两次，可以，但很繁琐

```ts
interface Point2D { x: number; y: number }
interface Point3D { x: number; y: number; z: number }
```

使用接口继承，来简化：

1. 使用 `extends`(继承)关键字实现了接口 Point3D 继承 Point2D
2. 继承后，Point3D 就有了 Point2D 的所有属性和方法(此时，Point3D 同时有 x、y、z 三个属性)

```ts
interface Point2D { x: number; y: number }
// 继承 Point2D
interface Point3D extends Point2D {
  z: number
}

// 继承后 Point3D 的结构：{ x: number; y: number; z: number }
```

## 交叉类型

**目标**：能够使用交叉类型模拟接口继承的功能

**内容**：

- 语法：`&`，交叉类型（intersection types）
- 作用：组合现有的对象类型
- 比如，Point3D 组合了 Point2D 和 后面的对象，所以，Point3D 就同时具有了 Point2D 和 后面对象中的所有属性

```ts
// 使用 type 自定义类型来模拟 Point2D 和 Point3D
type Point2D = {
  x: number
  y: number
}

// 使用 交叉类型 来实现接口继承的功能：
// 使用 交叉类型 后，Point3D => { x: number; y: number; z: number }
// 也就是同时具有了 Point2D 和 后面对象 的所有的属性了
type Point3D = Point2D & {
  z: number
}

let o: Point3D = {
  x: 1,
  y: 2,
  z: 3
}
```

## 元组类型

**目标**：能够理解什么是元组

**内容**：

场景：在地图中，使用经纬度坐标来标记位置信息

> 可以使用数组来记录坐标，那么，该数组中只有两个元素，并且这两个元素都是数值类型

使用 number[] 的缺点：不严谨，因为该类型的数组中可以出现任意多个数字

```ts
let position: number[] = [116.2317, 39.5427]
```

更好的方式：`元组 Tuple`

- 元组类型是另一种类型的数组，它**确切地知道包含多少个元素，以及特定索引对应的类型**
- 元组类型可以确切地标记出有多少个元素，以及每个元素的类型

```ts
// 该示例中，元素有两个元素，每个元素的类型都是 number
let position: [number, number] = [116.2317, 39.5427]
```

实际上，React 中 `useState` hook 的返回值类型就是一个元组类型

```ts
// 因为对于 useState 来说，它的返回值长度固定切每个索引对应的元素类型也是知道的
const [loading, setLoading] = useState(false)
```

---

## 类型推论

**目标**：能够知道什么是TS的类型推论

**内容**：

> 在 TS 中，某些没有明确指出类型的地方，**TS 的类型推论机制会帮助提供类型**

- 换句话说：由于类型推论的存在，这些地方，**类型注解可以省略不写**
- 发生类型推论的 2 种常见场景：
  1. 声明变量并初始化时
  2. 根据参数类型决定函数返回值时

```ts
// 变量 age 的类型被自动推断为：number
let age = 18

// 函数返回值的类型被自动推断为：number
// 注意：函数参数一定要添加类型
function add(num1: number, num2: number) {
  return num1 + num2
}
```

- 推荐：**能省略类型注解的地方就省略**（~~偷懒~~，充分利用TS类型推论的能力，提升开发效率）
- 技巧：如果不知道类型，可以通过鼠标放在变量名称上，利用 VSCode 的提示来查看类型
- 推荐：在 VSCode 中写代码的时候，多看方法、属性的类型，养成写代码看类型的习惯（充分发挥 VSCode 的能力）

## 字面量类型-介绍说明

**目标**：能够知道TS的字面量类型是什么

**内容**：

> 思考以下代码，两个变量的类型分别是什么?

```ts
let str1 = 'Hello TS'
const str2 = 'Hello TS'
```

通过 TS 类型推论机制（技巧），可以得到答案：
- 变量 str1 的类型为：string

- 变量 str2 的类型为：'Hello TS'

解释:

1. str1 是一个变量(let)，它的值可以是任意字符串，所以类型为：string
2. str2 是一个常量(const)，它的值不能变化只能是 'Hello TS'，所以，它的类型为：'Hello TS'

注意：此处的 'Hello TS'，就是一个**字面量类型**，也就是说某个特定的字符串也可以作为 TS 中的类型

实际上，任意的 JS 字面量（比如，对象、数字等）都可以作为类型使用

```ts
// 字面量类型：{ name: 'jack' }
const obj: { name: 'jack' } = { name: 'jack' }

// 字面量类型：[]
const arr: [] = []

// 字面量类型：18
const age: 18 = 18

// 字面量类型：false
const falseValue: false = false
```

- 字面量名词的解释：**通过const定义，有具体的值，这个值可以作为类型**

```js
// [1, 3, 5] 就是一个字面量值
const arr = [1, 3, 5]
const arr1 = new Array()

// { name: 'jack' } 也是一个字面量值
const obj = { name: 'jack' }
const _obj = new Object()
```

## 字面量类型-使用模式和场景

**目标**：能够用字面量类型配合联合类型一起使用

**内容**：

> 使用模式：字面量类型配合联合类型一起使用，**用来表示一组明确的可选值列表**

- 比如，在贪吃蛇游戏中，游戏的方向的可选值只能是上、下、左、右中的任意一个

```ts
// 使用自定义类型:
type Direction = 'up' | 'down' | 'left' | 'right'

function changeDirection(direction: Direction) {
  console.log(direction)
}

// 调用函数时，会有类型提示：
changeDirection('up')
```

- 解释：参数 direction 的值只能是 `up/down/left/right` **中的任意一个**
- 优势：相比于 string 类型，使用字面量类型更加精确、严谨

## 枚举类型-基本使用（了解）

**目标**：能够了解TS中的枚举类型

**内容**：

> 枚举：使用enum定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个

枚举的功能类似于**字面量类型+联合类型组合**的功能，也可以表示一组明确的可选值

```ts
// 创建枚举类型
enum Direction { Up, Down, Left, Right }

// 使用枚举类型
function changeDirection(direction: Direction) {
  console.log(direction)
}

// 调用函数时，需要应该传入：枚举 Direction 成员的任意一个
// 类似于 JS 中的对象，直接通过 点（.）语法 访问枚举的成员
changeDirection(Direction.Up)
```

解释:
- 使用 `enum` 关键字定义枚举

- 约定枚举名称以大写字母开头

- 枚举中的多个值之间通过 `,`（逗号）分隔

- 定义好枚举后，直接使用枚举名称作为类型注解

## 枚举类型-数字枚举

**目标**：能够了解什么是数字枚举

**内容**：

> 问题：我们把枚举成员作为了函数的实参，它的值是什么呢?

- 解释：通过将鼠标移入 Direction.Up，可以看到枚举成员 Up 的值为 0
- 注意：**枚举成员是有值的，默认为：从 0 开始自增的数值**
- 我们把枚举成员的值为数字的枚举，称为：`数字枚举`
- 当然，也可以给枚举中的成员初始化值

```ts
// Down -> 11、Left -> 12、Right -> 13
enum Direction { Up = 10, Down, Left, Right }

enum Direction { Up = 2, Down = 4, Left = 8, Right = 16 }
```

## 枚举类型-字符串枚举

**目标**：能够了解什么是字符串枚举

**内容**：

>字符串枚举：枚举成员的值是字符串

- 注意：字符串枚举没有自增长行为，因此，**字符串枚举的每个成员必须有初始值**

```ts
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
```

## 枚举类型-枚举实现原理

**目标**：能够了解枚举类型的实现原理

**内容**：

> 枚举是 TS 为数不多的非 JavaScript 类型级扩展（不仅仅是类型）的特性之一

- 因为：其他类型仅仅被当做类型，而枚举**不仅用作类型**，**还提供值**(枚举成员都是有值的)
- 也就是说，其他的类型会在编译为 JS 代码时自动移除。但是，**枚举类型会被编译为 JS 代码**

```ts
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

// 会被编译为以下 JS 代码：
// 整体来看：将枚举转化成了 JS 中的一个对象
/*
	var Direction = {
		Up: 'UP',
    Down: 'DOWN',
    Left: 'LEFT',
    Right: 'RIGHT'
	}
*/

var Direction;
(function (Direction) {
  Direction["Up"] = "UP";
  Direction["Down"] = "DOWN";
  Direction["Left"] = "LEFT";
  Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
```

- 说明：枚举与前面讲到的字面量类型+联合类型组合的功能类似，都用来表示一组明确的可选值列表
- 一般情况下，**推荐使用字面量类型+联合类型组合的方式**，因为相比枚举，这种方式更加直观、简洁、高效

## 类型断言

**目标**：能够使用TS中的类型断言指定更加具体的类型

**内容**：

> 有时候你会比 TS 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型。 比如，

```ts
// 假设页面中有个 id 为 link 的 a 标签：
// <a id="link" href="http://itcast.cn/">传智播客</a>

// 我们希望通过 DOM 拿到 a 标签的 href 属性
const aLink = document.getElementById('a')
```

- 该方法返回值的类型是 HTMLElement，该类型只包含所有标签公共的属性或方法，不包含 a 标签特有的 href 等属性
- 因此，这个**类型太宽泛(不具体)**，无法操作 href 等 a 标签特有的属性或方法
- 解决方式：这种情况下就需要**使用类型断言指定更加具体的类型**

使用类型断言：

1. 使用 `as` 关键字实现类型断言
2. 关键字 as 后面的类型是一个更加具体的类型（HTMLAnchorElement 是 HTMLElement 的子类型）
3. 通过类型断言，aLink 的类型变得更加具体，这样就可以访问 a 标签特有的属性或方法了

```ts
// 使用类型断言来指定为更加具体的 HTMLAnchorElement 类型
const aLink = document.getElementById('link') as HTMLAnchorElement
```

- 另一种语法，使用 `<>` 语法，这种语法形式不常用知道即可:

```ts
// 该语法，知道即可：
const aLink = <HTMLAnchorElement>document.getElementById('link')
```

*技巧：在浏览器控制台，通过 `__proto__` 可以获取 DOM 元素的类型*

## typeof 运算符

**目标**：能够知道TS中的typeof运算符的作用

**内容**：

> 众所周知，JS 中提供了 typeof 操作符，用来在 JS 中获取数据的类型

```js
console.log(typeof 'Hello world') // ? string
```

>实际上，TS 也提供了 typeof 操作符：可以在**类型上下文**中引用变量或属性的类型（**类型查询**）

- **使用场景：**根据已有变量的值，获取该值的类型，来**简化类型书写**

```ts
let p = { x: 1, y: 2 }
function formatPoint1(point: { x: number; y: number }) {}
formatPoint1(p)

// 此处使用 typeof p 获取变量 p 在 TS 中的类型：
function formatPoint2(point: typeof p) {}

formatPoint2({ x: 1, y: 2 })

```

- 解释:
  1. 使用 `typeof` 操作符来获取变量 p 的类型，结果与第一种（对象字面量形式的类型）相同
  2. typeof 出现在**类型注解的位置（参数名称的冒号后面）所处的环境就在类型上下文**（区别于 JS 代码）
  3. 注意：typeof 只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型）

## = any 类型 =

**目标**：能够知道TS中的any类型

**内容**：

>**原则：不推荐使用 any**！这会让 TypeScript 变为 “AnyScript”（失去 TS 类型保护的优势）

- 解释：因为当值的类型为 any 时，可以对该值进行任意操作，并且不会有代码提示

```ts
let obj: any = { x: 0 }

obj.bar = 100
obj()
const n: number = obj
```

说明：尽可能的避免使用 any 类型，除非临时使用 any 来“避免”书写很长、很复杂的类型

> 其他隐式具有 any 类型的情况

1. 声明变量不提供类型也不提供默认值

2. 函数参数不加类型

注意：因为不推荐使用 any，所以，这两种情况下都应该提供类型  

# 第一天
