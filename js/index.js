/*循环模式*/
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',//竖向滚动
    pagination:'.swiper-pagination',
    paginationType:'fraction',
    loop:true,
    onTransitionEnd: function (swiper) {
        var slides = swiper.slides;
        var curIndex=swiper.activeIndex;
        var lastIndexSlide=slides.length-1;//现在最后一个滑块
        var trueIndexSlide=slides.length-2;//原来最后一个滑块
        [].forEach.call(slides, function (item, index) {
            item.id = '';
            if(curIndex==index){
                switch (index){
                    case 0:
                        item.id = 'page'+trueIndexSlide;
                        break;
                    case lastIndexSlide:
                        item.id = 'page1';
                        break;
                    default :
                        item.id = 'page' + curIndex ;
                }
            }
        })
    }
});


var skillBtn=document.querySelector('.skill-pic'),
    skill=document.querySelector('#skill'),
    next=document.querySelector('#next');
skillBtn.addEventListener('click',function () {
    skill.style.display='block'
});
next.addEventListener('click',function () {
    skill.style.display='none';
    bannerTip();
});

var experBtn=document.querySelector('.exper-pic'),
    exper=document.querySelector('#exper'),
    nextBtn=document.querySelector('#next1');
experBtn.addEventListener('click',function () {
    exper.style.display='block'
});
nextBtn.addEventListener('click',function () {
    exper.style.display='none'
});

/*function bannerTip(){
    var box=document.querySelector('.swiper-container');
    var boxInner=document.querySelector('.swiper-wrapper');
    var slides = document.querySelector('.swiper-slide');
    var n=0;
    n++;
    utils.css(boxInner,{top:-n*(document.documentElement.clientHeight)});
}*/

/*banner6 打字效果*/

var flag=true;
function writePage() {
    var project=document.getElementById('project');
    var page=project.getElementsByTagName('em');
    var str='多项网页制作：1、负责将UI的设计稿转化为静态页面；2、负责动态网页的编写，活动宣传页面等；3、负责后续代码优化，改版等；';
    var n=0;
    createP();
    clearInterval(timer);
    var timer=setInterval(function(){
        if(n>=page.length){
            clearInterval(timer);
            flag=false;
            return;
        }
        animate(page[n],{opacity:1},{duration:50});
        n++;
    },100);
    flag=false;
    function createP(){
        var frg=document.createDocumentFragment();
        for(var i=0; i<str.length; i++){
            var oP=document.createElement('em');
            oP.innerHTML=str[i];
            frg.appendChild(oP);
        }
        project.appendChild(frg);
        frg=null;
    }
}


var projectBtn=document.querySelector('.project-pic'),
    project=document.querySelector('#project'),
    nextBtn1=document.querySelector('#next2');

projectBtn.addEventListener('click',function () {
    project.style.display='block';
    if (!flag) return;
    writePage();
    flag=false;
});
nextBtn1.addEventListener('click',function () {
    project.style.display='none'
});




/*音频部分*/
var music=document.querySelector('.music');
var funk=document.querySelector('#funk');
window.setTimeout(function(){
    funk.play();
    funk.addEventListener('canplay',function(){
        music.className='music musicCur'
    },false)
},1000);
music.addEventListener('click',function(){
    if(funk.paused){
        funk.play();
        music.className='music musicCur'
    }else{
        funk.pause();
        music.className='music';
        music.style.opacity=1
    }
},false);
