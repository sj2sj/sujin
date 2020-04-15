
// modal open-close 이벤트
$('.modal_open_btn').click(function() {
	var value = this.value;
	tmplRender(value);
	$('#modal').fadeIn();
	//모달 밖 스크롤 제어
	$.fn.fullpage.setAllowScrolling(false);
	$.fn.fullpage.setKeyboardScrolling(false);
	$('html, body').addClass('hidden');
});

$('#modal_close_btn').click(function() {
	$('#modal').fadeOut();
	//모달 밖 스크롤 제어
	$.fn.fullpage.setAllowScrolling(true);
	$.fn.fullpage.setKeyboardScrolling(true);
	$('html, body').removeClass('hidden');
});




function tmplRender(value) {

	var mTmpl = $.templates('#modalTmpl');
	var htmlOutput = mTmpl.render(data[value]);
	$('#modal_content').html(htmlOutput);
}

	
// js-render
var data = {
	"sujin": [
		{
			"pageTitle" : "이수진 포트폴리오"
			, "pageImg" : "assets/img/portfolio/sujinfull.png"
			, "devType" : "normal"
			, "type" : "반응형 웹"
			, "impType" : "기획, 디자인, 퍼블리싱 100%"
			, "workPrd" : "2020. 03 ~ 2020. 04"
			, "totalPage" : "1"
			, "useApi" : "fullpage.js, jsrender, scss"
			, "githubPage" : "https://github.com/sj2sj/customs/"
			, "mainPage" : "http://sj2sj.dothome.co.kr/sujin/index.html"
			, "opinion" : "'나' 를 소개해야하는 페이지인 만큼, 깔끔하고 직관적으로 보일 수 있도록 했습니다. 언제든 원하는 섹션으로 넘어갈 수 있도록 메뉴를 구성했습니다. 첫 섹션에서는 저의 성격들을 나열해놓고, 타이핑 되는 듯한 효과를 통해 페이지를 동적으로 보이도록 했습니다. 모달 창에서는 jsrender를 사용해 데이터 바인딩 하였습니다. <br>또한 포트폴리오 사이트를 만들며 scss를 처음 사용해보았는데, CSS보다 간략한 표기법으로 CSS를 구조화하여 사용할 수 있는 것이 매력적이었습니다."
		}
	]
	, "customs": [
		{
			"pageTitle" : "관세청"
			, "pageImg" : "assets/img/portfolio/customs1024.png"
			, "devType" : "clone"
			, "type" : "반응형 웹"
			, "impType" : "퍼블리싱 100%"
			, "workPrd" : "2020. 03 ~"
			, "totalPage" : "3 (메인: 1, 서브: 2)"
			, "useApi" : "slick.js, datepicker"
			, "githubPage" : "https://github.com/sj2sj/customs/"
			, "mainPage" : "http://sj2sj.dothome.co.kr/customs/"
			, "subPage1" : "http://sj2sj.dothome.co.kr/customs/html/openInfo.html"
			, "subPage2" : "http://sj2sj.dothome.co.kr/customs/html/infoList.html"
			, "opinion" : "메뉴가 열리고 접힐 때 마다 유동적으로 변해야하는 height 값들 때문에, 3depth 메뉴를 만드는 것이 생각보다 힘들었지만 성취감을 느낄 수 있었습니다!"
		}
	]
	, "coffeebean": [
		{
			"pageTitle" : "커피빈"
			, "pageImg" : "assets/img/portfolio/coffeebean1920.png"
			, "devType" : "clone"
			, "type" : "반응형 웹"
			, "impType" : "퍼블리싱 100%"
			, "workPrd" : "2020. 03 ~"
			, "totalPage" : "2 (메인: 1, 서브: 1)"
			, "useApi" : "swiper.js"
			, "githubPage" : "https://github.com/sj2sj/coffeebean/"
			, "mainPage" : "http://sj2sj.dothome.co.kr/coffeebean/"
			, "subPage1" : "http://sj2sj.dothome.co.kr/coffeebean/html/login.html"
			, "opinion" : ""
		}
	]
	, "megabox": [
		{
			"pageTitle" : "메가박스"
			, "pageImg" : "assets/img/portfolio/megabox1920.png"
			, "devType" : "clone"
			, "type" : "반응형 웹"
			, "impType" : "퍼블리싱 100%"
			, "workPrd" : "2020. 02 ~ 2020. 02"
			, "totalPage" : "1 (메인: 1)"
			, "useApi" : "swiper.js"
			, "githubPage" : "https://github.com/sj2sj/megabox/"
			, "mainPage" : "http://sj2sj.dothome.co.kr/megabox/index21.html"
			, "opinion" : ""
		}
	]
}

console.log(JSON.stringify(data['customs']));

