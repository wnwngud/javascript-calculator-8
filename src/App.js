import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try{
      let inputStr = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      let numArray = this.parsing(inputStr)
      let result = this.calculate(numArray)

      MissionUtils.Console.print(`결과 : ${result}`)

    } catch(error){
    }
  }
  
  parsing(inputStr){
    if(inputStr==="") return 0;
    // 공백이면 결과로 0을 리턴

    // 공백이 아니면
    let checkStr = /^[1-9][0-9]*[,:][1-9][0-9]*([,:][1-9][0-9]*)*$/;
    // (1 이상의 양수 + 구분자 + 1 이상의 양수)는 항상 포함하며
    // 그 뒤에 (구분자 + 1이상의 양수)가 오는 형태를 검사

    // 조건을 통과한 경우
    if(checkStr.test(inputStr)){
      return inputStr.split(/[,:]/);
    }
  }

  calculate(numArray){
    let sum = 0;

    for(let i of numArray){
      // 문자를 정수로 변환 후 더하기 
      sum+=Number(i);
    }

    return sum;
  }
}

export default App;
