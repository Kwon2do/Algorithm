function solution(s){
    
    var answer = true;
    //여는 괄호만 따로 담아둘 배열
    var stack_open = [];
    //s를 배열로 만듦
    var array = [...s]; //s.split("");
    array.map((el)=>{
        //여는 괄호가 나오면, stack_open 배열에 저장
        if(el==='(') stack_open.push('(');
        //닫는 괄호가 나오면, stack_open배열에 원소(여는괄호)가 있는지 확인
        else if(el===')') {
            if(stack_open.includes('(')){
                stack_open.pop(); //만약, 여는 괄호가 존재하면 괄호 매칭완료라서 pop해줌
            }
            else{ //닫는 괄호는 나왔는데, 여는 괄호가 없으면 매칭 실패라서 false
                answer = false;
            }
        };
    })
    //여는 괄호만 남게 되는 상황도 고려해줌.
    if(stack_open.length!==0) answer=false;
    return answer;
}

/* 시간복잡도 O(n) */