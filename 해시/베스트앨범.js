function solution(genres, plays) {
    // 1. 장르별 총 재생수를 계산
    let genresTotal = {};
    for (let i = 0; i < genres.length; i++) {
        if (genresTotal[genres[i]]) {
            genresTotal[genres[i]] += plays[i];
        } else {
            genresTotal[genres[i]] = plays[i];
        }
    }

    // 2. 장르별 총 재생수를 내림차순 정렬
    let sortedGenres = Object.keys(genresTotal).sort((a, b) => genresTotal[b] - genresTotal[a]);

    // 3. 장르별로 곡 넣기
    let genreSongs = {};
    for (let i = 0; i < genres.length; i++) {
        if (!genreSongs[genres[i]]) {
            genreSongs[genres[i]] = [];
        }
        genreSongs[genres[i]].push([plays[i], i]);
    }
    // 4. 장르 내에서 재생수 기준으로 내림차순 정렬
    for (let genre in genreSongs) {
        genreSongs[genre].sort((a, b) => {
            if (b[0] === a[0]) {
                return a[1] - b[1];
            }
            return b[0] - a[0];
        });
    }

    // 5. 각 장르에서 2개만 선택
    var answer = [];
    for (let genre of sortedGenres) {
        //곡이 2개보다 적으면 그냥 있는 개수만큼 순회함
        for (let i = 0; i < Math.min(2, genreSongs[genre].length); i++) {
            //현재 장르의 i번째 곡의 인덱스를 의미합니다.
            answer.push(genreSongs[genre][i][1]);
        }
    }

    return answer;
}
