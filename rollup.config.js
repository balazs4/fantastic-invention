const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const node = require('rollup-plugin-node-resolve');
const filesize = require('rollup-plugin-filesize');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
const uglify = require('rollup-plugin-uglify');

const extras = {
	development: () => [
		serve({ contentBase: 'dist', historyApiFallback: true, port: 3000 }),
		livereload({ watch: 'dist', verbose: true })
	],
	production: () => [
		filesize(),
		uglify()
	]
}[process.env.NODE_ENV || 'development'];

module.exports = {
	entry: 'src/index.js',
	dest: 'dist/bundle.js',
	format: 'iife',
	plugins: [
		node({ jsnext: true, main: true }),
		commonjs({ sourceMap: false }),
		buble({ jsx: 'h' }),
		...extras()
	],
	sourceMap: true
}
