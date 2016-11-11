
//00,01, 02
//10, 11, 12
//20, 21, 22

//00, 10, 20
//01, 11, 21
//02, 12, 22

//00, 11, 22
//02, 11, 20

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
    [0, 0 ,0]]
}

Referee.prototype.checkGrid = function (){


}
Referee.prototype.markSquare = function (id){
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
      console.log(this.mark, " X")

    }else if (this.players[1].turn === 1){
      this.players[0].turn = 1;
      this.players[1].turn = 0;
      this.mark = "O";
      this.grid[firstDigit][secondDigit] = this.mark;
      console.log(this.mark, " O")
    }
  // console.log(this.grid)
  }
}

Referee.prototype.getGridValueFromId = function (id){
  var firstDigit = parseInt(id.charAt(0));
  var secondDigit = parseInt(id.charAt(1));
  return this.grid[firstDigit][secondDigit];
}



  // console.log(this.grid);


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
    jeffery.markSquare(gridId)
    $(this).text(jeffery.getGridValueFromId(gridId));

  });



});
