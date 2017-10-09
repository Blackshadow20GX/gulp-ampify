var gutil = require('gulp-util');
var through = require('through2');
var ampify = require('ampify');

//Gulp wrapper plugin for html-to-amp
module.exports = function(directory){
  return through.obj(function(file, enc, cb) {
    if(file.isNull()) return cb(null, file);
    if(file.isStream()) return cb(new Error('gulp-html-to-amp: Streams not supported.'));

    const html = file.contents.toString();
    gutil.log('HTML: ' + html);
    var amp = ampify(html, {cwd: directory});
    amp = amp.toString();
    gutil.log('AMP:' + amp);
    file.contents = new Buffer(amp);
    cb(null, file);
  });
};
