//첫번째 이미지 이미지 슬라이드 되는 부분

//DOMContentLoaded 이게 페이지가 로드되면 addEventListener가 발생하는 뜻
document.addEventListener('DOMContentLoaded', () =>{
    //모든 슬라이드(이미지) -> s
    const s = document.querySelectorAll('.slide');
    //현재 슬라이드는 기본적으로 0
    let now_slide =0;

    //화면에 보여지는 이미지
    function show(v){
        s.forEach((slide,i) =>{
            // 현재 인덱스 값이 now_slide이거랑 동일해야 화면에 보여줌('active')
            if(i === v) slide.classList.add('active');
            // 그렇지 않으면 보여주지 않음
            else slide.classList.remove('active');
        })
    }

    //다음 이미지
    function next(){
        //ex) 0번째 인덱스는 +1을 해서 1/3을 하면 나머지가 1이 나옴
        now_slide = (now_slide +1 ) % s.length;
        show(now_slide);
    }
    //첫번째 이미지는 기본값 0(즉 첫번째 이미지)
    show(now_slide)
    //3초마다 이미지 변경
    setInterval(next,3000);
})


//ABOUT_SKU부분 슬라이더
document.addEventListener("DOMContentLoaded", ()=> {
    const ABOUT_SKU_img = document.querySelectorAll(".ABOUT_SKU_slide");
    let now_img = 0;

    function show(v){
        ABOUT_SKU_img.forEach((slide,i) =>{
            if(i === v) {slide.classList.add('active');
            // document.getElementById('ABOUT_SKU상황').innerText = `0${now_img+1}/06`
            // / 기준으로 서로 다른 색을 적용하기 위함
            document.getElementById('ABOUT_SKU상황').setAttribute('data-before', `0${now_img+1}`);
            document.getElementById('ABOUT_SKU상황').setAttribute('data-after', '/06');
           
        }else slide.classList.remove('active');
        })
    }

    function next(){
        now_img = (now_img + 1) % ABOUT_SKU_img.length;
        show(now_img);
    }

    show(now_img)
    setInterval(next,3000);
})