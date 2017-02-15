const extras = {
	development: () => [
		require('rollup-plugin-serve')({ contentBase: 'dist', historyApiFallback: true, port: 3000 }),
		require('rollup-plugin-livereload')({ watch: 'dist', verbose: true })
	],
	production: () => [
		require('rollup-plugin-uglify')()
	]
}[process.env.NODE_ENV || 'development'];

let cache;

module.exports = {
	entry: 'src/index.js',
	dest: 'dist/bundle.js',
	format: 'iife',
	cache,
	plugins: [
		require('rollup-plugin-alias')({
			'preact-mdl': require('path').resolve(__dirname, 'node_modules', 'preact-mdl', 'src', 'index.js')
		}),
		require('rollup-plugin-node-resolve')({ jsnext: true, main: true }),
		require('rollup-plugin-commonjs')({ sourceMap: false }),
		require('rollup-plugin-babel')({
			babelrc: true,
			include: ['src/**','node_modules/preact-mdl/**']
		}),
		...extras(),
		require('rollup-plugin-filesize')()
	],
	sourceMap: true
}
