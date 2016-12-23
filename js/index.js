function createBox(option){
	var a = document.createElement('a');
	a.style.backgroundImage = 'url(' + option.bigUrl + ')';
	a.href = option.href;
	a.innerHTML = '<h2>' + option.title + '</h2>'
				+ '<p>' + option.label + '</p>'
				+ '<img src=\'' + option.smallUrl + '\' />';
	return a;
}
var exhibitionData = [
	{
		href : '/a',
		bigUrl : './images/pic1.jpg',
		smallUrl : './images/spic1.png',
		title : '豪车不止BBA',
		label : '德系三架马车，是时候退位让贤啦'
	},
	{
		href : '/a',
		bigUrl : './images/pic2.jpg',
		smallUrl : './images/spic2.png',
		title : '百年大厂杰作',
		label : '时间在流逝，品质永流传！'
	},
	{
		href : '/a',
		bigUrl : './images/pic3.jpg',
		smallUrl : './images/spic3.png',
		title : '便宜才是王道',
		label : '谁说便宜没好车？'
	},
	{
		href : '/a',
		bigUrl : './images/pic4.jpg',
		smallUrl : './images/spic4.png',
		title : '驾校毕业生',
		label : '那些年，我们练过的普桑和捷达。'
	},
	{
		href : '/a',
		bigUrl : './images/pic5.jpg',
		smallUrl : './images/spic5.png',
		title : '明星也抠门',
		label : '明星都买二手车了你还等什么'
	},
	{
		href : '/a',
		bigUrl : './images/pic6.jpg',
		smallUrl : './images/spic6.png',
		title : '全能的大玩具',
		label : '越野帮手、四驱利器'
	}
];
var fragment = document.createDocumentFragment();
exhibitionData.forEach(function(item){
	fragment.appendChild(createBox(item));
});
document.getElementById('exhibition').appendChild(fragment);










































