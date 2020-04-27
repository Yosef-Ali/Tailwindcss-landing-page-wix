# Tailwindcss-landing-page-wix

![screencaptur](screencapture.jpg)

Gulp with TailwindCSS Starter Kit - A repo which makes your development easier with predefined gulp tasks that help you to use [tailwindcss](https://github.com/tailwindcss/tailwindcss) with simple npm commands

## Commands

1. Install Dev Depedencies

```sh
 yarn
```

2. To start development and server for live preview

```sh
 yarnrun dev
```

3. To generate minifed files for live server

```sh
 yarn run build
```

## How to include Google Fonts to your project

```sh
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
```

Please follow the this [tailwind documentation](https://tailwindcss.com/docs/fonts/#font-families) to include fonts to tailwind config file and just link using `<link>` tag

# Options

## Paths

To change the path of files and destination/build folder, edit options in **package.json** file

```sh
"options": {
    ...
    "paths": {
        "root": "./",
        "src": {
            "base": "./src",
            "css": "./src/css",
            "js": "./src/js",
            "img": "./src/img"
        },
        "dist": {
            "base": "./dist",
            "css": "./dist/css",
            "js": "./dist/js",
            "img": "./dist/img"
        },
        "build": {
            "base": "./dist",
            "css": "./dist/css",
            "js": "./dist/js",
            "img": "./dist/img"
        },
    }
    ...
}
```
