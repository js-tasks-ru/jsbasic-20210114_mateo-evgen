let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
    console.log(this.a, this.b);
  },
  sum() {
    let result = this.a + this.b;
    return result;
  },
  mul() {
    let result = this.a * this.b;
    return result;
  }
}

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
