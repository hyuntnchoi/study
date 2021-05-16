//JavaScript bind 함수에 대해 테스트해보기 위한 코드
//module.getX 와 module.getX()는 차이가 있음

const module = {
    x: 42,
    getX: function() {
        // 함수호출이라 전역객체에 바인딩
        return this.x; 
    }
};

//42를 반환함
console.log(module.getX());

// 함수를 전역변수에 저장 후 전역객체에서 실행하는 것임으로
// undefined가 반환됨
const unboundGetX = module.getX;
console.log(unboundGetX()); // The fn gets invoked at the global

//함수를 전역변수에 저장하지만 this를 module 객체로
//명시적으로 바인딩했음으로 42가 리턴 됨
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
