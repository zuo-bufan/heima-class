/**
 * 类型断言: 通过类型断言获取更加具体的类型
 * 如何获取HTML元素的类型：document.querySelector('元素名').__proto__
 *
 */

// any 代表任意类型
let num: any = 1
num = '1'
num = []

const div = document.querySelector('div') as HTMLDivElement
div.style.border = '10px solid red'

export {}
