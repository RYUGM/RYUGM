class Student{
    constructor(이름,성별,번호){
      this.이름 = 이름
      this.성별 = 성별
      this.번호 = 번호

    }
    toString(){


        return `${this.이름}학생은 ${this.성별}이고 ${this.번호}번 입니다.`
    }
}
let students =[]