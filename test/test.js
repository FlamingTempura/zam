/* global tack, $ */
'use strict';

/*var post = tack($('#post'));

post.date = new Date();
post.author = { name: 'Me' };
post.tags = [];

var i = 0;
setInterval(function () {
	i++;
	post.message = 'hello ' + i;
	post.show = i % 2 === 0;
	post.tags.push({ name: 'boo' + i });
	post.date = new Date();
	post.boop = { doop: { stroop: 'boop-doop-stroop-' + i } };
	post.$();
}, 1000);

var author = tack($('#author'));

setInterval(function () {
	author.name = 'John';
	author.message = 'Boo';
	author.$();
}, 1500);

var login = tack($('#login'));
login.password = '123';
login.$();*/
/*setInterval(function () {
	login.$();
}, 100)*/

var view = tack($('#thing'));

view.color = 'red';
view.memos = [{ title: 'blah' }, { title: 'blahdeblah' }];
view.$();
setInterval(function () {
	//view.color = view.color === 'red' ? 'green' : 'red';
	view.upper = !view.upper;
	view.disable = !view.disable;
	view.greeting = view.upper ? '<strong ta-style-color="\'blue\'">Hello!</strong>' : '<em>Welcome</em>';
	/*view.memos.push({ title: Math.random() });
	if (Math.random() > 0.3) {
		view.memos.shift();
	}*/
	view.$();
}, 1000);