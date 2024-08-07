### ⚠️ 실제 코드는 인라인으로 작성하지 말 것! ⚠️ 
forEach, map, filter, reduce 등등 
고차 함수 기반의 함수형 프로그래밍은 제어문 사용을 줄이고 가독성을 높이는 데 의미가 있다.  
프로그래머스 추천 답안은 JS 내장 메서드의 응용 감각을 기르는 것뿐,
성능이나 유지보수성 면에서 권장할 코드가 아니다.


### 입력받기
https://leehyungi0622.github.io/2021/03/24/202103/210324-algorithm_javascript_input/
```javascript
const fs = require('fs');
const inputWithNoEncoding = fs.readFileSync(0).toString().split('\n');
const inputWithEncoding = fs.readFileSync(0, 'utf8').split('\n');
const cvtInputToNumber = fs.readFileSync(0, 'utf8').split('\n');
// ['10', '']와 같은 배열의 형태로 값이 반환되기 때문에 [0]번째 인덱스 값을 가져온다.
console.log(Number(cvtInputToNumber[0]));
```

**숫자 배열로 변환**
```javascript
const arr = input[1].split(' ').filter(s => s !== '').map(Number);
```
filter를 해 주지 않으면 ''이 배열에 포함되고 숫자 0으로 변환되는 바람에 코너케이스에 걸린다.

### Tip
- Number()대신 +연산자 사용하기.
```javascript
// before
stringifiedNumbers.filter(string => isPrime(Number(string)).length
// after
stringifiedNumbers.filter(string => isPrime(+string)).length
```

Javascript Math.min은 여러 인수를 가질 수 있다.
```javascript
console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1

```


- 값이 0으로 주어질 경우 1 추가하기 : XOR 연산자 활용
```javascript
// before
value += (target === 0 ? 1 : 0);
// after
value += target ^ 1;
```

### 신택스
- [올바른 이차원 배열 선언](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/array/2D/Declaration.md)
- 콜백 함수에 세미콜론 넣는 실수.
  
### 정렬
- [.sort()로 숫자 정렬](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/sort/Programmers_42576.js)
- [두 개의 정렬 조건식](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/sort/programmers_120880.js)
- [... 연산자로 문자열 -> 배열 만들기](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/string/Programmers_120911.js)

### 소인수분해
- [소인수 종류별로 구하기](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/tree/main/hyobin/javascript/prime)

### 아스키 코드
- [문자에서 아스키 코드 구하기, 문자로 되돌리기](https://github.com/AtomicLiquors/TPA_CHB/blob/main/hyobin/javascript/string/programmers_155652.js)

### for
- for… in의 각 항목은 숫자 인덱스가 아니라 문자열이다.  
  DP를 for in으로 풀었는데   
  idx+1이 1 + 1 = 2가 아니라 1 + “1” = 11이 되었다.  
  그래서 DP 테이블이 1부터 채워지지 않고 1, 11, 21... 처럼 채워지는 바람에 아래 꼴이 났다.
  ```
  [[7],[10,0],[18,1,0,null,null,null,null,null,null,null,null,1],[20,8,4,0,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,4],[24,13,6,6,0,null,null,null,null,null,null,13,null,null,null,null,null,null,null,null,null,6,null,null,null,null,null,null,null,null,null,6]]
  ```
### 정규식
- .match()에 정규식 넣을 때는 쌍따옴표를 쓰지 않는다.
```javascript
// (x) : .match()가 null을 반환한다.
this.id = id.match("/[a-z0-9-_.]/g").join("");
// (o)
this.id = id.match(/[a-z0-9-_.]/g).join("");
```

- 문자열 끝을 나타내는 $ 기호 활용하기
  - [신규 아이디 추천](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/regex/2021_KAKAO_BLIND_RECRUIT_LV1.js)
 
### 누적합
- [2차원 배열의 특정 범위 값 채우기](https://github.com/TPA-ThreeProblemsAday/TPA_CHB/blob/main/hyobin/javascript/prefix/2D/Programmers_92344.js)
  - [해설](https://kimjingo.tistory.com/155)
