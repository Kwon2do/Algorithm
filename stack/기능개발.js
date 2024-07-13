function solution(progresses, speeds) {
    let answer = [];
    //남은 작업이 존재하지 않을 때까지
    while (speeds.length > 0) { 
      //배포 사이클당 작업 수
      let count = 0;
      //작업이 100이 되기 전까지, 계속 더함
      for (let i = 0; i < speeds.length; i++) {
        if (progresses[i] < 100) {
          progresses[i] += speeds[i];
        }
      }
      // 맨앞의 progress배열이 100이 넘으면 shift(인덱스0부터 꺼냄)
      // 100이 넘은 뒷 작업들까지 다 완료처리
      while (progresses[0] >= 100) { 
        progresses.shift();
        speeds.shift();   
        count++;
      }
      // 완료된 작업이 1개이상이면 배포
      if (count > 0) {
        answer.push(count)
    }
    }
    return answer;
  }

  /* 시간복잡도 O(n^2) */