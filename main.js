// 전역변수 사용을 회피하기 위한 즉시실행함수 사용
(() => {
    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0]; // 현재 활성화된(visible 클래스가 붙은) .graphic-item을 담고있는 변수
    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {
        // 범위 안에서 사라지거나 생겨날 때 호출된다.
        ioIndex = entries[0].target.dataset.index * 1; // String을 숫자로 바꾸는 가장 쉬운 방법 *1
        console.log(ioIndex);
    });

    for (let i=0; i < stepElems.length; i++){
        io.observe(stepElems[i]); // IntersectionObserver 메소드를 통한 관찰 대상 등록
        // stepElemens[i].setAttribute('data-index', i);
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    function activate()
     {
        currentItem.classList.add('visible');
    }

    function inactivate() {
        currentItem.classList.remove('visible');
    }
    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;
        let temp = 0;
        
        // for (let i=0; i < stepElems.length; i++) {
        for (let i = ioIndex-1; i < ioIndex+2; i++) {
            step = stepElems[i];
            if(!step) continue;
            boundingRect = step.getBoundingClientRect();

            temp++;

            if(boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8) {
                    inactivate();
                    currentItem = graphicElems[step.dataset.index];
                    activate();
                }
        }
        activate();
    });
})();