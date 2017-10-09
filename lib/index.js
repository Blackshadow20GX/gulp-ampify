var gutil = require('gulp-util');
var through = require('through2');
var ampify = require('ampify');
//import setupHtmlToAmp from 'html-to-amp';
//const htmlToAmp = setupHtmlToAmp();

//Gulp wrapper plugin for html-to-amp
module.exports = function(directory){
  return through.obj(function(file, enc, cb) {
    if(file.isNull()) return cb(null, file);
    if(file.isStream()) return cb(new Error('gulp-html-to-amp: Streams not supported.'));

    const html = file.contents.toString();
    //htmlToAmp(html, (err, amp) => {
    const amp = ampify(html, {cwd: directory});
    file.contents = new Buffer(amp);
    cb(null, file);
  });
};
