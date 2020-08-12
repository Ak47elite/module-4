(function(window){
  var speakword = 'bye';
  var byespeaker={};
  byespeaker.speak = function(name){
    console.log(speakword + " " + name);
  }
  window.byespeaker = byespeaker;
})(window);