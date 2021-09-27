let runningTotal=0; //variable create
let buffer ="0";  //creates default value jo jb b refresh kre th 0 aaye
let previousOperator; //create variable
const screen = document.querySelector(".screen"); //screen prr click krne pr function kree

document.querySelector (".calc-buttons").addEventListener("click", function(event) {
	buttonClick(event.target.innerText)  //inner text clear 0 wale text ko invoke kr rhaa h
	// button click pr inner text show hoyegaa
})
function buttonClick(value) {

	if (isNaN(parseInt(value))) {
	 //parseint checks ki no h yaa nii 
		symbolhai(value); //create fn ki symbol h vo value
	}
	else 
	{
		numberhai(value); //vrna no h vo value
	}

	rerender();
}

function numberhai (value){ //define numberhai fn
	if (buffer==="0") { 
		buffer = value; //jispe click kraa vo value show honi chahiye
	}
	else {
		buffer += value; //add krta jaaye value like 980
	}
}

function symbolhai (value) { //define symbolhai fn
	switch (value) {  //if se b kr sktee h
		case 'CLEAR' : //clear krne pr sbki values 0 ho jayengii
		buffer = "0";
		runningTotal=0; //0 means value 0 numeric value
		previousOperator=null; //null means data not yet provided simply void
		break;

		case "=" : //shud give result
		if (previousOperator === null) { //last no number is entered then returns the same no 
			return;
		}
		operationPalak(parseInt(buffer)); //parseint converts string to int
		previousOperator=null;

		buffer= ""+ runningTotal;
		runningTotal=0;
		break;

		case 'BACK' :
		if (buffer ===1) { //ek no input h th back dabane pr 0 ho jayegaaa
			buffer ="0" ;
		}
		else {
			buffer = buffer.substring(0,buffer.length-1); //980 input h th back dabane pr 98 hona chahiyee th index se dekhengee upto l-1
		}
		break;

		default :
		maths(value); //calculation part
		break;
	}
}
function maths(value) {
		const intbuffer= parseInt(buffer); //create variable intbuffer nd convert it inti int

		if(runningTotal === 0) {
			runningTotal= intbuffer; //store the no clicked
		}

		else {
			operationPalak(intbuffer); //add to th previous no entered
		}

		previousOperator=value; //jb 8 * kraa th 0 show honaa chahiyee taki new value dikhee
		buffer="0";
	}	

function operationPalak (intbuffer) {
	if (previousOperator === "/") { //performing operations
		runningTotal /= intbuffer;
	}
	else if (previousOperator === "*") {
		runningTotal *= intbuffer;
	}
	else if (previousOperator === "+") {
		runningTotal += intbuffer;
	}
	else if (previousOperator ==="-") {
		runningTotal -= intbuffer;
	}
	else 
		runningTotal %= intbuffer;
}

function rerender() {
	screen.innerText=buffer;
}






















