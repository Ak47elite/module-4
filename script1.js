(function(window){
  var speakword = 'hello';
  var hellospeaker={};
  hellospeaker.speak = function(name){
    console.log(speakword + " " + name);
  }
  window.hellospeaker = hellospeaker;
})(window);