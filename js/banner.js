function createBanner(option){
	var data = option.data,
		dataLen = data.length,
		element = document.getElementById(option.element),
		fragment = document.createDocumentFragment(),
		a = 0,
		images = data.map(function(item){
			return fragment.appendChild(createImage(item));
		}),
		timer = createTimer();
	function createImage(option){
		var a = document.createElement('a');
		a.href = option.href;
		a.title = option.title;
		a.style.backgroundImage = 'url(' + option.url + ')';
		return a;
	}
	function createTimer(){
		return setInterval(function(){
			var _a = a;
			a = a >= dataLen - 1 ? 0 : a + 1;
			images[_a].className = '';
			images[a].className = 'current';
		},4000);
	}
	function createButton(className){
		var i = document.createElement('i');
		i.className = 'icon ' + className;
		i.onclick = function(){
			clearInterval(timer);
			timer = createTimer();
			var _a = a;
			if(className === 'previous'){
				a = a > 0 ? a - 1 : dataLen - 1;
			}else{
				a = a >= dataLen - 1 ? 0 : a + 1;
			}
			images[_a].className = null;
			images[a].className = 'current';
		};
		return i;
	}
	images[a].className = 'current';
	fragment.appendChild(createButton('previous'));
	fragment.appendChild(createButton('next'));
	element.appendChild(fragment);
}
var bannerData = [
	{
		title : '广告',
		href : '/ad',
		url : './images/banner1.jpg'
	},
	{
		title : '大风车',
		href : '/dfc',
		url : './images/banner2.jpg'
	},
	{
		title : '车牛',
		href : '/cn',
		url : './images/banner3.jpg'
	}
]
createBanner({
	element : "banner",
	data : bannerData
});



























