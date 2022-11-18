function WebpIsSupported(callback){
// If the browser doesn't has the method createImageBitmap, you can't display webp format
if(!window.createImageBitmap){
callback(false);
return;
}
// Base64 representation of a white point image
var webpdata = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
// Retrieve the Image in Blob Format
fetch(webpdata).then(function(response){
return response.blob();
}).then(function(blob){
// If the createImageBitmap method succeeds, return true, otherwise false
createImageBitmap(blob).then(function(){
callback(true);
}, function(){
callback(false);
});
});
}


// You can run the code like !
WebpIsSupported(function(isSupported){
if(isSupported){
	var bodyel = document.querySelector('body');
	bodyel.classList.remove('no-webp');
	bodyel.classList.add('webp');
}else{
	console.log("Not supported");
}
});