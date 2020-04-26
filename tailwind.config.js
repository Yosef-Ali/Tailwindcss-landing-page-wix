module.exports = {
	theme: {
		fontFamily: {
			display: ['Barlow', 'sans-serif'],
			body: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#ff5900',
				black: '#0d0d0d',
			},
			zIndex: {
				negative: '-1',
			},
		},
	},
	variants: {
		opacity: ['responsive', 'hover'],
		backgroundColor: ['hover', 'default', 'focus'],
		display: ['responsive', 'hover', 'focus', 'group-hover'],
	},
	plugins: [],
};
// module.exports = {
// 	important: true,
// 	theme: {
// 		fontFamily: {
// 			display: ['Gilroy', 'sans-serif'],
// 			body: ['Graphik', 'sans-serif'],
// 		},
// 		extend: {
// 			colors: {
// 				cyan: '#9cdbff',
// 			},
// 			margin: {
// 				'96': '24rem',
// 				'128': '32rem',
// 			},
// 		},
// 	},
// 	variants: {
// 		opacity: ['responsive', 'hover'],
// 	},
// };
