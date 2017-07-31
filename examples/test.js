/* global zam, $ */
'use strict';

/*var post = zam($('#post'));

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

var author = zam($('#author'));

setInterval(function () {
	author.name = 'John';
	author.message = 'Boo';
	author.$();
}, 1500);

var login = zam($('#login'));
login.password = '123';
login.$();*/
/*setInterval(function () {
	login.$();
}, 100)*/

zam.root.beer = function () {
	return 'beer';
};

var view = zam($('#thing'));

view.color = 'red';
view.memos = [{ title: 'blah' }, { title: 'blahdeblah' }];
view.$q = 1;
view.ps = [];
//view.$();
setInterval(function () {
	//view.color = view.color === 'red' ? 'green' : 'red';
	view.upper = !view.upper;
	view.disable = !view.disable;
	view.greeting = view.upper ? '<strong z-style-color="\'blue\'">Hello!</strong>' : '<em>Welcome</em>';
	/*view.memos.push({ title: Math.random() });
	if (Math.random() > 0.3) {
		view.memos.shift();
	}*/
	view.d = !view.d;
	view.q = view.q === 1 ? 'a' : 1;
	//view.$();
	view.ps.push(Math.random());
}, 1000);

view.$watch('q', function (q) {
	console.log('val!', q);
});

view.$watch('d', function (q) {
	console.log('d ->', q);
});