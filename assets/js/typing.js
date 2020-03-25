
var typingIdx = 0; 
var typingTxt = '';
var remove = -1;

random();

var tyInt = setInterval(typing, 300); // 반복동작 

/* typing
	typing-text를 verb-text에 한 글자씩 입력하는 함수
*/
function typing() {
	if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
		$(".verb-text").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
    	typingIdx++; 
	} else { //타이핑 텍스트 끝나면
		//console.log('else');
		if (-(typingTxt.length+1) != remove) { // 타이핑 된 텍스트 한 글자씩 지움
			$(".verb-text").html(typingTxt.slice(0, remove));
			remove--;
			//console.log('remove:'+remove);
		} else if (-(typingTxt.length+1) == remove) { //글자 다 지우면 초기화
			typingIdx = 0;
			remove = -1;
			random();
		}
	}
}
	


/* random
	타이핑 될 li를 랜덤으로 구하는 함수
 */
function random () {
	//타이핑 될 수 있는 li의 개수 가져오기
	var max = $('.move_word li').length;
	//0~(li 개수-1) 만큼의 정수를 랜덤으로 뽑음
	var rand = Math.floor(Math.random() * max);

	//중복 제거 해야함!!

	$('.move_word li').removeClass('typing-text').eq(rand).addClass('typing-text');
	typingTxt = $(".typing-text").text(); // 타이핑될 텍스트를 가져온다 
	typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
}
 
    
  
  

