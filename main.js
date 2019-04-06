var rightA = document.getElementsByTagName('button')[0];
var wrongA = [document.getElementsByTagName('button')[1],
				document.getElementsByTagName('button')[2],
				document.getElementsByTagName('button')[3]] 
var numPage = document.getElementById('numPage');
var count = 1;
var titleSubj = document.getElementById('titleDir');
var ts = "Hiragana";
numPage.innerHTML = count;
titleSubj.innerHTML = ts;
var i = 0;

var text = "Next";
rightA.innerHTML = text;
while(i < 3)
{
	wrongA[i].innerHTML = "Wrong";
	i++;
}



/*
var iKana = document.getElementById('kana')

function setViewport(img, x, y, width, height) {
    img.style.left = "-" + x + "px";
    img.style.top  = "-" + y + "px";

    if (width !== undefined) {
        img.parentNode.style.width  = width  + "px";
        img.parentNode.style.height = height + "px";
    }
}

setViewport(document.getElementsByTagName("img")[0], 10, 20, 30, 40);