function solution(s, skip, index) {
    
    const shouldSkipLetter = [];

    // 특정 문자열에 대해 n번째 문자의 아스키 코드 구하기 : .charCodeAt(n)
    for(const skipLetter of skip){
        shouldSkipLetter[skipLetter.charCodeAt(0)] = true;
    }
    
    let str = "";
    
    for(const letter of s){
        let target = letter.charCodeAt(0);
        let rem = index;
        
        while(--rem >= 0){
            target = increaseCode(target);
            while(shouldSkipLetter[target]){
                target = increaseCode(target);
            }    
        }
        
        // 아스키 코드로를 문자열로 변환 : String의 내장 메서드 fromCharCode(n)
        str += String.fromCharCode(target);
    }
    
    return str;
}

function increaseCode(n){
    n++;
    if(n > 122) n = 97;
    return n;
}
