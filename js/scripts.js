
function player (mark){
  this.mark = mark,
  this.turn = 0
}

function Referee (){
  this.mark = " ",
  this.players = [],
  this.grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0 ,0]],
  this.winner = "",
  this.gameOver = false
}

Referee.prototype.checkGame = function (mark){
  if (this.checkColumns(mark) ||
  this.checkRows(mark) ||
  this.checkDiagonals(mark)){
    this.gameOver = true;
    this.winMessage();
    return true;
  }
  return false;

}
Referee.prototype.winMessage = function (){
  if (this.winner != ""){
    return this.winner + " wins the game!!!";
  }

}
Referee.prototype.checkColumns = function (mark){
  for (i in this.grid){
    if (this.grid[0][i] === mark &&
      this.grid[1][i] === mark &&
      this.grid [2][i]=== mark){
      this.winner = mark;
      return true;
    }
  }
}

Referee.prototype.checkRows = function (mark){
  for (i in this.grid){
    if (this.grid[i][0] === mark &&
      this.grid[i][1] === mark &&
      this.grid [i][2]=== mark){
      this.winner = mark;
      return true;
    }
  }
}

Referee.prototype.checkDiagonals = function (mark){

  if (this.grid [0][0] === mark &&
      this.grid [1][1] === mark &&
      this.grid [2][2] === mark){
      this.winner = mark;

      return true;
  }else if (this.grid [0][2] === mark &&
            this.grid [1][1] === mark &&
            this.grid [2][0] === mark){
            this.winner = mark;

            return true;
  }
}

Referee.prototype.markSquare = function (id){

  if (this.gameOver === false){
    var firstDigit = parseInt(id.charAt(0));
    var secondDigit = parseInt(id.charAt(1));
    var contents =$("#"+id).text();
    // console.log("c: ", contents)
    if (this.grid[firstDigit][secondDigit] === 0){
      if (this.players[0].turn === 1 && this.players[1].turn === 0){
        this.players[0].turn = 0;
        this.players[1].turn = 1;
        this.mark = "X";
        this.grid[firstDigit][secondDigit] = this.mark;
        // console.log(this.mark, " X")

      }else if (this.players[1].turn === 1){
        this.players[0].turn = 1;
        this.players[1].turn = 0;
        this.mark = "O";
        this.grid[firstDigit][secondDigit] = this.mark;
        // console.log(this.mark, " O")
      }
    // console.log(this.grid)
    }
  }
}

Referee.prototype.getGridValueFromId = function (id){
  if (this.gameOver === false){
    var firstDigit = parseInt(id.charAt(0));
    var secondDigit = parseInt(id.charAt(1));
    return this.grid[firstDigit][secondDigit];
  }

}


$(document).ready(function (){
  var playerX = new player("X");
  var playerO = new player("O");
  var jeffery = new Referee ();

  jeffery.players.push(playerX);
  jeffery.players.push(playerO);
  jeffery.players[0].turn = 1;


$(".grid").text(" ");
  $(".grid").click(function (){
    var gridId =$(this).attr('id');
    jeffery.markSquare(gridId);
    $(this).text(jeffery.getGridValueFromId(gridId));
    jeffery.checkGame("X");
    jeffery.checkGame("O");
    $("#message").hide().fadeIn().text(jeffery.winMessage());

  });



});
