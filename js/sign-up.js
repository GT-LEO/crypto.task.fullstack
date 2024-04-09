let formIndex = document.querySelector(".news-form");
	formIndex.addEventListener("submit", handleSubmit1);
	function handleSubmit1(e){
		event.preventDefault();
		let subscriberEmail = document.querySelector(".news-input").value;
		let returnMessage = document.querySelector(".h4");
		let subscriber = {
			email:subscriberEmail
		}
if (subscriberEmail.length <= 0){
	returnMessage.style.color = "red";
	returnMessage.innerText = "input your email"
}
else{
		console.log(subscriber);
	returnMessage.innerText = ""
	returnMessage.style.color = "green";

}

	}