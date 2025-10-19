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
    // 공백이면 결과로 0을 리턴
    if(inputStr==="") return 0;

    // 공백이 아니면 파싱 작업 수행
    let tempDelimiter = ",:";

    // 커스텀 구분자 처리
    if(inputStr.slice(0, 2) === '//' && inputStr.slice(3, 5) === '\\n'){
      // 기존 구분자에 커스텀 구분자 추가
      tempDelimiter += `${inputStr[2]}`;
      inputStr = inputStr.slice(5);
    }

    let delimiter = new RegExp(`[${tempDelimiter}]`);
    let numArray = inputStr.split(delimiter);

    return(numArray)
  }

  calculate(numArray){
    if (numArray === 0) return 0;

    let sum = 0;

    // 문자를 정수로 변환 후 더하기 
    for(let i of numArray){
      sum+=Number(i);
    }

    return sum;
  }
}

export default App;
