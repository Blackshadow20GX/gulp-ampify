var gutil = require('gulp-util');
var through = require('through2');
var ampify = require('ampify');

//Gulp wrapper plugin for AMPify package
module.exports = function(directory){
  return through.obj(function(file, enc, cb) {
    if(file.isNull()) return cb(null, file);
    if(file.isStream()) return cb(new Error('gulp-ampify: Streams not supported.'));

    try{
      const html = file.contents.toString();
      const amp = ampify(html, {cwd: directory}).toString();
      file.contents = new Buffer(amp);
    }
    catch(error){//Ignores invalid files put through ampify
    };
    cb(null, file);
  });
};
