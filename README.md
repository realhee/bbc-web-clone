# bbc-web-clone
BBC 비주얼저널리즘팀의 "재택근무의 일상화.. 코로나19가 바꿀 사무실의 미래" 인터랙티브 페이지 클론 코딩

Website link : https://www.bbc.com/korean/resources/idt-48d3c9a7-4063-4289-9726-611b5ea9d7b5

# Contents
1. 기본 format 작성
 - Flex Container를 통한 수직 스크롤 효과
 - justify-content를 통한 main-axis 정렬 방법 설정
 - position = sticky를 통한 인터랙티브 효과 적용
 - HTML tag 순서에 따른 z-index 제어

 2. main.js 작성
 - 전역변수 사용을 회피하기 위한 즉시실행함수 사용
 - dataset.(attrs)를 통한 data-attr 속성 적용
 - getBoundingClientRect() 함수로 position 가져오기
 - activate & inactivate 동작을 위한 함수형 프로그래밍
 - 불필요한 루프를 줄이기 위한 Intersection Observer 사용
       > 눈에 보이는 항목만 제어하기
       > 범위 안에서 사라지거나 생겨날 때 호출

 3. animation 기능 추가
 - dataset.(attr)를 통한 data-action 추가
 - will-change를 통한 브라우저에 변화 알려주기
 - setTimeout()을 통해 reload 시 scroll 초기화하기
