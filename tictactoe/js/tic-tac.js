var tictactoe = (function() {

    var turnCount=0,
        X = 'X',
        O = 'O',
        currentPlayer = X,
        open = '',
        board = [open, open, open, open, open, open, open, open, open, open];

    var displayMessage = function(message) {
        $('.message').html(message);
      };

    var switchPlayer = function() {
        currentPlayer = ( currentPlayer === X ) ? O : X;
        displayMessage( 'Current Player: ' + currentPlayer );
  };


  var isValidMove = function( index ) {
    if ( board[ index ] === open ) {
      return true;
    } else {
      displayMessage( 'That space is already taken!' );
      return false;
    }
  };

    var makeMove = function( $square, index ) {
      board[ index ] = currentPlayer;
      $square.html( currentPlayer );
      $( '.play-again' ).hide();
      turnCount++;
  };

  var userWins = function() {
    var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
                            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ],
        winIndex = -1;
    $.each( winCombinations, function( index, winCombination ) {
      if( allEqual( winCombination ) ){
        winIndex = index;
        return false;
      }
    });

    if( winIndex !== -1 ) {
        return winCombinations[ winIndex ];

    } else if ( turnCount === 9 ) {
        return true; 

    } else {
        return false;
    }
  };

    var allEqual = function( indexes ) {
    return ( board[ indexes[0] ] === board[ indexes[1] ] ) &&
           ( board[ indexes[0] ] === board[ indexes[2] ] ) &&
           ( board[ indexes[0] ] !== open );
  };

    var gameOver = function( endFormation ) {
    var resultMessage;

    if( $.isArray(endFormation) ){
      resultMessage = 'Game Over.  Player ' + currentPlayer + ' Wins';
      showWinFormation( endFormation );
    } else {
      resultMessage = 'Game Over.  Draw Game';
    }

    $( '.message' ).addClass( 'end-message' );
    displayMessage( resultMessage );

    $('.gameboard').off('click');
    $( '.play-again' ).show().on( 'click', function() {
        location.reload();
    });

  };

  var showWinFormation = function( formation ) {
    $.each( formation, function( index, winPosition ) {
      $( '.square' ).eq( winPosition ).addClass(' winning-square ');
    });
  };

  var play = function( $square ) {
    var index = +$square.attr( 'id' );

    if( isValidMove( index ) ){
      makeMove( $square, index );
      var winningFormation = userWins();

      ( winningFormation ) ? gameOver( winningFormation ) : switchPlayer();
    }
  };

  return { play: play };

})();

$( document ).ready( function() {
  $( '.gameboard' ).on( 'click', '.square', function() {
    tictactoe.play( $(this) );
  });
});
