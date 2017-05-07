/* global tack, $ */
'use strict';

tack.formatters.formatDate = function (val) {
	return val.toISOString();
};

var post = tack($('#post'));

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
login.update();
/*setInterval(function () {
	login.update();
}, 100)*/