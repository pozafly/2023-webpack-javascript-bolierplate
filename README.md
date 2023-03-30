# 2023-webpack-javascript-bolierplate

## 배포 환경 유의점
1. .gitignore에 env 파일이 존재한다. 만약 bolierplate로 작업할 경우 env 폴더를 ignore에 적용시켜주어야 한다.
2. webpack.prod.js에만 babel loader를 설정했다. dev에서도 설정하고 싶다면 babel.common.js로 옮겨라.