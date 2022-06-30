const Calculator = require("../calculator.js");

describe("Calculator", () => {
  // * 각각의 테스트 코드는 독립적이어야 함 -> 클래스 객체 따로 생성
  // * 테스트 코드를 시작하기 전에 실행되어야 하는 코드가 중복된다면 beforeEach() 사용
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  it("inits width 0", () => {
    expect(calculator.value).toBe(0);
  });

  it("sets", () => {
    calculator.set(9);
    expect(calculator.value).toBe(9);
  });

  it("clear", () => {
    calculator.set(9);
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  describe("adds", () => {
    it("1 + 2 === 3", () => {
      calculator.set(1);
      calculator.add(2);
      expect(calculator.value).toBe(3);
    });

    // * 예상하는 에러는 expect() 내부의 콜백 함수에 작성함
    // * toThrow()를 사용해 에러 메시지를 작성할 수 있음
    it("add should throw an error if value is greater than 100", () => {
      expect(() => {
        calculator.add(101);
      }).toThrow("Value can not be greater than 100");
    });
  });

  it("subtracts", () => {
    calculator.subtract(1);
    expect(calculator.value).toBe(-1);
  });

  it("multiplies", () => {
    calculator.set(5);
    calculator.multiply(4);
    expect(calculator.value).toBe(20);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });

    it("4 / 4 === 1", () => {
      calculator.set(4);
      calculator.divide(4);
      expect(calculator.value).toBe(1);
    });
  });
});
