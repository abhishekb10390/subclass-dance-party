// Creates and returns a new dancer object that can step
// var Dancer = function(top, left, timeBetweenSteps) {

  

//   // use jQuery to create an HTML <span> tag
  
//   this.$node = $('<span class="dancer"></span>');
  
//   this.timeBetweenSteps = timeBetweenSteps;
//   Dancer.prototype.step.call(this, this.timeBetweenSteps);


  

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   this.setPosition(top, left);
  
// };

// Dancer.prototype.step = function(timeBetweenSteps) {
// // the basic dancer doesn't do anything interesting at all on each step,
// // it just schedules the next step
//   var current = this;
//   setTimeout(current.step.bind(current), current.timeBetweenSteps);
// };

// Dancer.prototype.setPosition = function(top, left) {
// // Use css top and left properties to position our <span> tag
// // where it belongs on the page. See http://api.jquery.com/css/
// //
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };


// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img class="larry" src="https://ih0.redbubble.net/image.212682276.2842/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u3.jpg" style="max-height: 100px; max-width: 100px;"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.prototype.step.call(this);
  

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  Dancer.prototype.setPosition.call(this, top, left);

  
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.detectCollision = function() {
  if (window.dancers === undefined) {
    return;
  }
  var thisTop = $(this.$node[0]).css('top');
  thisTop = eval(thisTop.slice(0, thisTop.length - 2));
  var thisLeft = $(this.$node[0]).css('left');
  thisLeft = eval(thisLeft.slice(0, thisLeft.length - 2));
  for (var i = 0; i < window.dancers.length; i++) {
    var iTop = $(window.dancers[i]).css('top');
    iTop = eval(iTop.slice(0, iTop.length - 2));
    var iLeft = $(window.dancers[i]).css('left');
    iLeft = eval(iLeft.slice(0, iLeft.length - 2));
    if (window.dancers[i] === this.$node[0]) {
      continue;
    } else if (Math.abs(thisTop - iTop) < 100 && Math.abs(thisLeft - iLeft) < 100) {
      $(this.$node[0]).remove();
      $(window.dancers[i]).remove();
      break;
    }
  }
};

Dancer.prototype.explode = function () {
  // body...
};

