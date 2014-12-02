var posts =[
		{
			"title": "Первая новость",
			"date":"11-11-2014",
			"content": "Предновогодная распродажа. Скидки 100%!",
		},
		{
			"title": "Вторая новость",
			"date":"12-11-2014",
			"content": "Предновогодняя распродажа закончилась. Кто не успел, тот опоздал."
		},
		{
			"title": "Третья новость",
			"date":"11-12-2014",
			"content": "Пусть пока побудет пустой"
		},
	]

var $ = document.querySelector.bind(document)
var containerEl = $('.posts-container')
var sidebarEl = $('.sidebar-module ol')

var render = function(arr) {
  return arr.reduce(function(previousValue, currentValue, index, array) { return previousValue +
				'<li id ='+index+'>'+
							'<p>' + currentValue.date+'</p>'+
							'<h3>' + currentValue.title + '</h3>'+
							'<p>' + currentValue.content + '</p>' +
				'</li>'
		
				  },'');
}

// Init
containerEl.innerHTML = render(posts);

function parseDate(dateString){

return  new Date (dateString.replace(/(\d+)-(\d+)-(\d+)/, '$2/$1/$3')).getTime();
}

function loadbtn(event){
			var filterBegin = parseDate($('#filterBegin').value);
			var filterEnd =parseDate($('#filterEnd').value);
			var postslist = posts.slice()
			function isEnough(element) {
				
				return (parseDate(element.date) >= filterBegin)&&(parseDate(element.date) <= filterEnd)
			}
			var filterlist=postslist.filter(isEnough)
			containerEl.innerHTML = render(filterlist);
	}

function loadpost(index){
	containerEl.innerHTML = '<li id ='+index+'>'+
		
						'<h4>'+posts[index].title+'</h4>'+
								'<p>' + posts[index].date + '</p>'+
										'<p>' + posts[index].content + '</p>'//+
								'</li>'
}
var render2 = function(arr2) {
  return arr2.reduce(function(previousValue, currentValue, index, array) { return previousValue +
		'<li><a onclick="loadpost('+index+')">'+currentValue.title+'</a></li>'
						
		  },'');
}
sidebarEl.innerHTML = render2(posts);