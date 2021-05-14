// 모듈 불러올 때 js 확장자 붙이고 실행
// https://stackoverflow.com/questions/61904877/why-js-file-extension-is-not-added-while-importing-a-component-in-reactjs
//default해줘서
import MyClass, { hello, world, variable as v, obj } from './mylib1.js'

console.log(new MyClass())
console.log(hello())
console.log(world)
// 상수이므로 값 변경 불가
// world = "wrong"
console.log(v)
// 비록 모듈 내부에서는 let 키워드로 변수로 선언했지만, 모듈 바깥에서는 상수(read-only)로 취급하므로 값 변경 불가
// (변수의 내용은 모듈 파일의 내부에서만 변경 가능함을 유의)
// v = 5678
console.log(v)
console.log(obj)
// 상수여도 객체 자체를 대입하여 바꾸는 것이 아니라 참조를 통해 접근하여 객체 내부의 내용을 바꾸는 것이므로 내용 수정이 가능함을 유의
// (또한, 이 시점 이후에 해당 객체를 다른 모듈에서도 불러와 사용하고 있다면, 모두 같은 객체를 공유하고 있으므로 수정 내용이 그 쪽 모듈에도 반영됨을 유의)
obj.name = "John"
obj.age = 20
console.log(obj)