class MyClass {}

// 1. export default 구문으로 특정 대상 내보내기
// (단, export default는 모듈 내부에서 오직 한 대상에만 적용 가능)
export default MyClass

function hello() {
    return "hello"
}
const world = "world"
let variable = 1234
const obj = {}

// 2. export 구문으로 대상 내보내기
// (그 외에는 export로 내보내기 가능)
export { hello, world, variable, obj }