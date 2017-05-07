/* jshint node: true */
'use strict';

var peg = require('pegjs'),
	fs = require('fs');

var grammar = fs.readFileSync('grammar.pegjs', 'utf8');

var parser = peg.generate(grammar, {
	allowedStartRules: ['Text', 'Expression'],
	output: 'source',
	format: 'globals',
	exportVar: 'parser'
});

fs.writeFileSync('parser.js', parser, 'utf8');