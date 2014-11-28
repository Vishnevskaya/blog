function print_contacts(){
	var con = '{"country":"Belarus","city":"Minsk","adress":[{"street":"N","house":"X"}],"phone":["111-11-11","222-22-22"]}';
	var str = JSON.parse(con);
	document.write("Adress: " + "<br/>" + str.country + "<br/>" + str.city + "<br/>"  + str.adress[0].street + " street, " + str.adress[0].house + " house" + "<br/>" + "Phone" + str.phone[0] + " " + str.phone[1] + "</h3>");
}