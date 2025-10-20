import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    let inputStr = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    let numArray = this.parsing(inputStr);
    let result = this.calculate(numArray);

    MissionUtils.Console.print(`결과 : ${result}`);
  }
  
  parsing(inputStr) {
    // 공백이면 결과로 0을 리턴
    if(inputStr==="") return 0;

    // 공백이 아니면 파싱 작업 수행
    let delimiter = ",:";

    // 커스텀 구분자 처리
    if(inputStr.startsWith('//')) {

      // 커스텀 구분자 지정 형식 예외처리
      // 커스텀 구분자의 길이가 2 이상인 경우 or
      // '\n'을 제대로 입력하지 않은 경우
      if(inputStr.slice(3,5) !== '\\n')
        throw new Error("[ERROR] 옳바른 입력 형식이 아닙니다. ex\) //문자\\n");
      
      // 커스텀 구분자로 숫자를 사용한 경우
      if(!isNaN(Number(inputStr[2]))) 
        throw new Error("[ERROR] 커스텀 구분자는 문자만 입력해 주세요.");

      let customDelimiter = inputStr[2]

      // 기존 구분자에 커스텀 구분자 추가
      delimiter += `${customDelimiter}`;

      inputStr = inputStr.slice(5);
    }

    // 이스케이프 처리가 별도로 필요한 문자들 처리
    let checkEscape = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    delimiter = checkEscape(delimiter);

    let numArray = inputStr.split(new RegExp(`[${delimiter}]`));

    return numArray;
  }

  calculate(numArray) {
    if (numArray === 0) return 0;

    let sum = 0;

    for(let i of numArray){
      // 양수 및 문자열 연속 사용으로 인한 공백 검사
      if(!/^[1-9][0-9]*$/.test(i))
        throw new Error("[ERROR] 옳바른 계산식이 아닙니다.");

      sum+=Number(i);
    }

    return sum;
  }
}

export default App;
