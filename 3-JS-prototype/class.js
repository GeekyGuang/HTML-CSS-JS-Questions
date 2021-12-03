class People {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.hair = 'black'
  }

  eat() {
    console.log('吃好喝好')
  }
}

class Student extends People {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }

  study() {
    console.log('我爱学习')
  }
}

class Teacher extends People {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  teach() {
    console.log('同学们好')
  }
}

const xiaoming = new Student('小明', '18', 100)
const lee = new Teacher('李老师', '30', '语文')

console.dir(xiaoming)
console.dir(lee)
