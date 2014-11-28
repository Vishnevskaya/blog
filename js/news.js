function print_news(){
	var news = '{"news":[{"date":"2014-11-10","tittle":"Первая новость","content":"Предновогодняя распродажа. Скидки 100%!"},{"date":"2014-11-11","tittle":"Вторая новость","content":"Предновогодняя распродажа закончилась. Кто не успел, тот опоздал"}]}';
	var path = "../css/content_news.json";
	var str = JSON.parse(news);
	document.write(str.news[1].date + " <br/> " + str.news[1].tittle + " <br/> " + str.news[1].content  + " <br/> <br/>  " + str.news[0].date + " <br/> " + str.news[0].tittle + " <br/> " + str.news[0].content);
	
}