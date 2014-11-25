(function($){
    $.fn.extend({ 
        MyPagination: function(options) {
            var defaults = {
                height: 400,
                fadeSpeed: 400
            };
            var options = $.extend(defaults, options);

            // Создаем ссылку на объект
            var objContent = $(this);

            // Внутренние переменные
            var fullPages = new Array();
            var subPages = new Array();
            var height = 0;
            var lastPage = 1;
            var paginatePages;

            // Функция инициализации
            init = function() {
                objContent.children().each(function(i){
                    if (height + this.clientHeight > options.height) {
                        fullPages.push(subPages);
                        subPages = new Array();
                        height = 0;
                    }

                    height += this.clientHeight;
                    subPages.push(this);
                });

                if (height > 0) {
                    fullPages.push(subPages);
                }

                // Оборачиваем каждую полную страницу
                $(fullPages).wrap("<div class='page'></div>");

                // Скрываем все обернутые страницы
                objContent.children().hide();

                // Создаем коллекцию для навигации
                paginatePages = objContent.children();

                // Показываем первую страницу
                showPage(lastPage);

                // Выводим элементы управления
                showPagination($(paginatePages).length);
            };

            // Функция обновления счетчика
            updateCounter = function(i) {
                $('#page_number').html(i);
            };

            // Функция вывода страницы
            showPage = function(page) {
                i = page - 1; 
                if (paginatePages[i]) {

                    // Скрываем старую страницу, показываем новую
                    $(paginatePages[lastPage]).fadeOut(options.fadeSpeed);
                    lastPage = i;
                    $(paginatePages[lastPage]).fadeIn(options.fadeSpeed);

                    // и обновлем счетчик
                    updateCounter(page);
                }
            };

            // Функция вывода навигации (выводим номера страниц)
            showPagination = function(numPages) {
                var pagins = '';
                for (var i = 1; i <= numPages; i++) {
                    pagins += '<li><a href="#" onclick="showPage(' + i + '); return false;">' + i + '</a></li>';
                }
                $('.pagination li:first-child').after(pagins);
            };

            // Выполняем инициализацию
            init();

            // Привязываем два события - нажатие на кнопке "Предыдущая страница"
            $('.pagination #prev').click(function() {
                showPage(lastPage);
            });
            // и "Следующая страница"
            $('.pagination #next').click(function() {
                showPage(lastPage+2);
            });

        }
    });
})(jQuery);

// Инициализация 
jQuery(window).load(function() {
    $('#content').MyPagination({height: 400, fadeSpeed: 400});
});

showHomePage = function(page){
    document.write("Home");
}



//SEARCH

function createArray(length){
 this.length = length;
 for( var i = 1; i<= length; i++)
  this[i] = null;
 return this;  
 innerHTML(length);
}
// ******************* Some Preparation Data ********************

var Entries = 5; // How many entries in the Database?
var Separator = ";"       // Separator for the Data fields
var Fields = 3; // Number of DataFields
var iDate = 1;
var iTittle = 2;
var iContent = 3;

// ****************** Now create the Array **********************

var Data = new createArray(Entries);

// **************** Type in your Data below *********************

Data[1] = "20.10.2014;First;Первая запись Первая записьПервая запись Первая записьПервая запись";
Data[2] = "21.10.2014;Second;Вторая запись Вторая записьторая запись Вторая записьторая запись Вторая запись";
Data[3] = "22.10.2014;Third;Третья записьТретья записьТретья записьТретья запись Третья записьТретья запись";
Data[4] = "23.10.2014;Fourth; Четвертая записьЧетвертая запись Четвертая записьЧетвертая запись Четвертая запись";
Data[5] = "24.10.2014;Fifth;Пятая записьПятая записьПятая запись Пятая записьПятая запись Пятая запись";



//********************* End of Data Block ************************
//****************** Begin Common functions **********************

var LastMatch = 0; // Store Last Matched Data Index
function GetField(Entry,number) // Count begins with 1, f.e. GetField(Data[1] ,1) returns Walkowiak
{
 var Out = "";
 var FirstChar;
 var LastChar;

 FirstChar = 0;
 LastChar = Entry.indexOf(Separator) ;
 if (number == 1) 
 {
  Out += Entry.substring(FirstChar,LastChar); 
  return Out;
 }
 if (number == Fields)
 {
  Out+= Entry.substring(Entry.lastIndexOf(Separator) + 1,Entry.length)
  return Out;
 }

 for(var i =2; i <= number; i++)
 {
  FirstChar = LastChar + 1;
  LastChar = Entry.indexOf(Separator, FirstChar);
 }
 Out += Entry.substring(FirstChar,LastChar); 
 return Out;
}

function FindNext(String, number) // number is the number of the field to search in
{ 
 var CompareWith = "";
 for(var i = LastMatch + 1; i <=Data.length; i++)
 {
  var buf = GetField(Data[i],number);
  var bl = parseInt(buf.length);
  var sl = parseInt(String.length);
  if(bl > sl)
  {
  CompareWith = buf.substring(0,sl );
  } 
  else
  {
   CompareWith = buf;
  }
  if (CompareWith == String)
  {
   LastMatch = i;
   return i;
  }
 }
 LastMatch = 0;
 return 0; 
}

// ************************** Custom functions for this document*********************
function ResetSearch()
{
 LastMatch = 0;
 for(var i = 1; i <=Fields; i++)
 {
  document.SearchForm.elements[i+3].value = "";
 }
}



function TypeNext()
{
 var SearchString = document.SearchForm.Text.value;
 var index = document.SearchForm.elements[3].options.selectedIndex + 1;
 var j = FindNext(SearchString, index);
 if (j == 0)
 {
  alert("Достигнут конец списка, элемент не обнаружен! \nНажмите 'Find Next' чтобы запустить поиск, с начала списка!");
  ResetSearch();
  return;
 }
 var buf = "";
 for(var i = 1; i <=Fields; i++)
 {
  buf = GetField(Data[j],i);
  document.SearchForm.elements[i+3].value = buf;
 }
}


//SEARCH222222222

var item = new Array();

/* Here is where all the magic happens.  
    Just enter as many additional pages that
    that you want to search, then fill in the
    additional listings for each page.
*/

// "Page Name","path","Page Title","Many,Key,Words","Descriptive Comments"

c=0; item[c]=new Array("index.html","","DemoSite","index,main,start,home,front","Demonstration search engine data about an imagined but probable internet site.");
c++; item[c]=new Array("about.htm","","About Me","about,author,contact,email,who","Contact details and general information about the creator of the site and what the site is about.");
c++; item[c]=new Array("links.htm","","Links page","links,more,where,similar,friends","Links to my favourite sites which I find interesting. Other friends sites which have similar interests to my own.");
c++; item[c]=new Array("main.htm","main/","Main Page","content,main,focus","The main part of my site which contains what you have come to see. Lots of stuff like that and more great things. All in a sub directory.");
c++; item[c]=new Array("logo.jpg","main/images/","Link Logo","link,image,logo,graphic","The logo.jpg is just a small image which you can place on your site as a link to me. It's in a second level subdirectory.");


page="<html><head><title>Search Results</title></head><body bgcolor='white'><center><table border=0 cellspacing=10 width=80%>";


function search(frm) {
win = window.open("com/search.html","index","width=400,height=350, scrollbars");
win.document.write(page);
txt = frm.topsearch.value.split(" ");
fnd = new Array(); total=0;
for (i = 0; i < item.length; i++) {
fnd[i] = 0; order = new Array(0, 4, 2, 3);
for (j = 0; j < order.length; j++)
for (k = 0; k < txt.length; k++)
if (item[i][order[j]].toLowerCase().indexOf(txt[k]) > -1 && txt[k] != "")
fnd[i] += (j+1);
}
for (i = 0; i < fnd.length; i++) {
n = 0; w = -1;
for (j = 0;j < fnd.length; j++)
if (fnd[j] > n) { n = fnd[j]; w = j; };
if (w > -1) total += show(w, win, n);
fnd[w] = 0;
}
win.document.write("</table><br>Total found: "+total+"<br></body></html>");
win.document.close();
}
function show(which,wind,num) {
link = item[which][1] + item[which][0]; 
line = "<tr><td><a href='"+link+"'>"+item[which][2]+"</a> Score: "+num+"<br>";
line += item[which][4] + "<br>"+link+"</td></tr>";
wind.document.write(line);
return 1;
}

