function printСontacts(){
	var contacts = '{																			\
					"adress":"Belarus, Minsk, N street, X house, phone: 111-11-11, 222-22-22"  \
				}																				\
					';
	var str = JSON.parse(contacts);
	document.write("" + str.adress);

}
