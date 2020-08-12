(function(window){
    var names = ['Nicolai','Magisk','Gla1ve','JS','Javascript','Dupreeh'];

    for(var i=0; i<names.length; i++){

        var firstletter = (names[i].charAt(0)).toLowerCase();

        if(firstletter === 'j'){
            window.byespeaker.speak(names[i]);
        }
        else{
            window.hellospeaker.speak(names[i]);
        }
    }
})(window);