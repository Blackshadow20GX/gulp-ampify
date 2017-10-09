var gutil = require('gulp-util');
var through = require('through2');
import setupHtmlToAmp from 'html-to-amp';
const htmlToAmp = setupHtmlToAmp();

//Gulp wrapper plugin for html-to-amp
module.exports = function(){
  return through.obj(function(file, enc, cb) {
    if(file.isNull()) return cb(null, file);
    if(file.isStream()) return cb(new Error('gulp-html-to-amp: Streams not supported.'));

    const html = file.contents.toString();
    htmlToAmp(html, (err, amp) => {
      if (err) {
        throw err;
      };
      file.contents = new Buffer(amp).write();
      });
    cb(null, file);
  });
};
