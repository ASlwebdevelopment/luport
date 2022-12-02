const text = document.querySelector(".fancy");
const strText = text.textContent;
const KontText = strText.split("");
text.textContent ="";
for (let i=0; i < KontText.length; i++){
	text.innerHTML += "<span>" + KontText[i] + "</span>";
}

let char = 0; 
let timer = setInterval(onTick, 50);

function onTick(){
	const span = text.querySelectorAll('span')[char];
	span.classList.add('poephol');
	char++
	if(char === KontText.length){
		complete();
		return;
	}
}
function complete(){
	clearInterval(timer);
	timer = null;
}


 const handleSubmit = event => {
    event.preventDefault();

   // do your verifications and checks
   if(!verified) return false    

    const REQUEST_PARAMETERS = {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      body: encode({ ...data }), //your data here. Needs to have your form-name attribute set
    };

    fetch(`/`, REQUEST_PARAMETERS)
      .then(() => {
        console.log(`OK`);
      })
      .catch(error => alert(error));
  };


  window.addEventListener('scroll',reveal);
  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }

// scroll jquery
  var scroll = new SmoothScroll('a[href*="#"]');