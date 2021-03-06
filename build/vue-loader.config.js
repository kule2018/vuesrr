module.exports = {
  extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  postcss: [
	  require('postcss-salad')({
		  browsers: [ 'ie > 8', 'Firefox > 20', 'Opera > 3'],
		  features: {
			  "bem": {
				  defaultNamespace: undefined, // default namespace to use, none by default
				  shortcuts: {
					  utility: 'util'
				  }
			  }
		  }
	  })
  ]
}
