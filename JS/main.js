var flexScreen, referenceAction, addEvent, seasonAction, openPhoto, closeImgs, portfolioPhotos, addEventPortfolio;

//reference menu start
addEvent = function () {
    
    if (this.offsetParent.id === "reference") {
        for (var j = 0; j < this.offsetParent.children[0].childElementCount; j++)panels.children[j].style.display="none";
    }else{
        for(var j = 0; j < this.offsetParent.children[1].childElementCount; j++)seasons.children[j].style.display="none";
    }
    switch(this.children[0].innerHTML){
        case("Контакты"):
            panels.children[2].style.display="block";
            break;
        case("Портфолио"):
            panels.children[1].style.display="block";
            break;
        case("Главная"):
            panels.children[0].style.display="block";
            break;
        case('<img src="imgs/Photos/Autumn/autumn1.jpg"><p>Autumn</p>'):
            document.getElementById("seasons").children[0].style.display="block";
            break;
        case('<img src="imgs/Photos/Summer/summer1.jpg"><p>Summer</p>'):
            document.getElementById("seasons").children[1].style.display="block";
            break;
        case('<img src="imgs/Photos/Spring/spring1.jpg"><p>Spring</p>'):
            document.getElementById("seasons").children[2].style.display="block";
            break;
        case('<img src="imgs/Photos/Winter/winter1.jpg"><p>Winter</p>'):
            document.getElementById("seasons").children[3].style.display="block";
            break;
    }
};

referenceAction = function () {
    var references = document.getElementById("referenceButtons"),
        panels = document.getElementById("panels"),
        i = 0;
    while(references.children[i] !== undefined){
        references.children[i++].addEventListener("click", addEvent);
    }
}();

//season menu start

closeImgs = function (path) {
	for(var k = 0; k < path.offsetParent.children[1].childElementCount; k++){ 
		path.offsetParent.children[1].children[k].children[0].style.width="140px";
		path.offsetParent.children[1].children[k].children[0].style.margin="6px";		
	}
};

seasonAction = function(){
    var seasonsBtns = document.getElementById("seasonButtons"),
        seasons = document.getElementById("seasons"),
        i = 0;
    while(seasonsBtns.children[i] !== undefined){
        seasonsBtns.children[i++].addEventListener("click", addEvent)
    }
}();

//open imgs 
addEventImg = function () {
	if(this.style.width === "") closeImgs(this);
	if(this.style.width === "140px"){
		console.log(1);
		closeImgs(this);
		this.style.width = "700px";
		this.style.margin = "30px";
	} else closeImgs(this);
};

openPhoto = function () {
    var photoPath = document.getElementById("seasons");
    for(var i = 0; i < photoPath.childElementCount; i++){
        for(var j = 0; j < photoPath.children[i].children[1].childElementCount; j++){
            photoPath.children[i].children[1].children[j].children[0].addEventListener("click", addEventImg);
        }
    }
}();
