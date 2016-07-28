$(document).ready(function(){
  var profileImages = '.profile';
  $(profileImages).each(function(index) {
    animate($(this));
  });
});

function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}

function animate(elem){
    var newq = makeNewPosition();
    var oldq = elem.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    elem.animate({ top: newq[0], left: newq[1] }, speed, function(){
      animate(elem);
    });
};

function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest/speedModifier);

    return speed;
}
