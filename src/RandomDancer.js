var LarryBobDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bob');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
};

LarryBobDancer.prototype = Object.create(Dancer.prototype);
LarryBobDancer.prototype.constructor = LarryBobDancer;

LarryBobDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  this.$node.animate({top: '+=50'}, 500, function() {
    $(this).css({top: '-=50'});
  });
  this.detectCollision();
};