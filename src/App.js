import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try{
      let inputStr = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      MissionUtils.Console.print("결과 : ")

    } catch(error){
    }
  }
}

export default App;
