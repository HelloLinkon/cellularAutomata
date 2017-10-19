// random number generation
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// rule for generation
function setOfRules(lastrow, index){
	if(index == 0)
		return 0;
	else if(index == 40)
		return 0;
	else{
		// for 000
	if(lastrow[index-1] == 0 && lastrow[index] == 0 && lastrow[index+1] == 0)
		return Number(bb[0]);
	// for 001
	else if(lastrow[index-1] == 0 && lastrow[index] == 0 && lastrow[index+1] == 1)
		return Number(bb[1]);
	// for 010
	else if(lastrow[index-1] == 0 && lastrow[index] == 1 && lastrow[index+1] == 0)
		return Number(bb[2]);
	// for 011
	else if(lastrow[index-1] == 0 && lastrow[index] == 1 && lastrow[index+1] == 1)
		return Number(bb[3]);
	// for 100
	else if(lastrow[index-1] == 1 && lastrow[index] == 0 && lastrow[index+1] == 0)
		return Number(bb[4]);
	// for 101
	else if(lastrow[index-1] == 1 && lastrow[index] == 0 && lastrow[index+1] == 1)
		return Number(bb[5]);
	// for 110
	else if(lastrow[index-1] == 1 && lastrow[index] == 1 && lastrow[index+1] == 0)
		return Number(bb[6]);
	// for 111
	else if(lastrow[index-1] == 1 && lastrow[index] == 1 && lastrow[index+1] == 1)
		return Number(bb[7]);
	}


}

// convert to binary
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

// create the first random row
var a = [];
function firstRandomRow(){

  for(var i=0; i<41; i++)
  a.push(randomIntFromInterval(0,1));
  // $(".ca").text(a);
  a.forEach(function(each){

    if(each === 0)
      $(".row").append("<div class='white'></div>");
    else {
      $(".row").append("<div class='black'></div>");
    }


  });
}

//make 8 bit those are not
function make8bit(bb){
   var makeup = ["0", "00", "000", "0000", "00000", "000000", "0000000"];
   console.log(bb.length);
   if(bb.length < 8)
   {
      console.log(makeup[(8 - bb.length) - 1]);
      return makeup[(8 - bb.length) - 1]+bb;
   }
   else {
     return bb;
   }
}

// program start from here

firstRandomRow();
var cc = dec2bin(145);
var bb = make8bit(cc);


// generate 5 generation row
// var value = Number(prompt("how many row you want to generate?"));
for(var k = 0; k<80; k++){
	var b= [];
	for(var j = 0; j < 41; j++){
		b.push(setOfRules(a, j));
	}
	// console.log(b);
  $(".ca").append('<div class="row'+ k +'"></div>');

  b.forEach(function(each){

    if(each === 0)
      $(".row"+k).append("<div class='white'></div>");
    else {
      $(".row"+k).append("<div class='black'></div>");
    }


  });


	a = b;
}
