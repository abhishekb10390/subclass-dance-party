$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer.$node[0]);
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      if ($(window.dancers[i]).hasClass('bob')) {
        $(window.dancers[i]).animate({'left': '0'});
      } else if ($(window.dancers[i]).hasClass('ghost')) {
        $(window.dancers[i]).animate({'top': '0'});
      } else {
        $(window.dancers[i]).animate({'left': '100%'});
      }
    }
  });
  $(document).on('click', '.dancer', function() {
    $(this).closest('.dancer').remove();
  });

  // $('.pairUp').on('click', function() {
  //   for (var i = 0; i < window.dancers.length; i++) {
  //     var iTop = $(window.dancers[i]).css('top');
  //     var iLeft = $(window.dancers[i]).css('left');
  //     var closestDist = Math.pow(iTop - )
  //     for (var j = i+1; j < window.dancers.length; j++) {
  //       var jTop = $(window.dancers[j]).css('top');
  //       var jLeft = $(window.dancers[j]).css('left');
  //     }
  //   }
  // });
});

