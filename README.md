# gulp-ampify
## Introduction
gulp-ampify is a [Gulp.js](https://gulpjs.com/) wrapper for the [ampify](https://www.npmjs.com/package/ampify) package. 

## Installation
Install via [NPM](https://www.npmjs.com/) with `npm install gulp-ampify --save-dev`

## Usage
In your gulpfile.js:
```javascript
const ampify = require('gulp-ampify'); // Add the package to your gulpfile
const output_dir = './dist'; // Example output directory
const pages_path = './dist/**/*.html' // Example path to your html files

gulp.task('ampify', function(){
  return gulp.src(pages_path)
	  .pipe(ampify(output_dir)) // Argument specifies relative link to assets
	  .pipe(gulp.dest(output_dir))
};
```

