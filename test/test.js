/* global tack, $ */
'use strict';

/*var post = tack($('#post'));

post.data.date = new Date();
post.data.author = { name: 'Me' };
post.data.tags = [];

var i = 0;
setInterval(function () {
	i++;
	post.data.message = 'hello ' + i;
	post.data.show = i % 2 === 0;
	post.data.tags.push({ name: 'boo' + i });
	post.data.date = new Date();
	post.data.boop = { doop: { stroop: 'boop-doop-stroop-' + i } };
	post.update();
}, 1000);

var author = tack($('#author'));

setInterval(function () {
	author.data.name = 'John';
	author.data.message = 'Boo';
	author.update();
}, 1500);

var login = tack($('#login'));
login.data.password = '123';
login.update();*/
/*setInterval(function () {
	login.update();
}, 100)*/

var thing = tack($('#thing'));

thing.data.color = 'red';
thing.data.memos = [{ title: 'blah' }, { title: 'blahdeblah' }];
thing.update();
setInterval(function () {
	//thing.data.color = thing.data.color === 'red' ? 'green' : 'red';
	thing.data.upper = !thing.data.upper;
	thing.data.disable = !thing.data.disable;
	thing.data.greeting = thing.data.upper ? '<strong ta-style-color="\'blue\'">Hello!</strong>' : '<em>Welcome</em>';
	/*thing.data.memos.push({ title: Math.random() });
	if (Math.random() > 0.3) {
		thing.data.memos.shift();
	}*/
	thing.update();
}, 1000);