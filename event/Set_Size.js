// ====================================================================================================
//
// Cloud Code for Set_Size, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

var size_v = Spark.getData().SIZE;
var player = Spark.getPlayer();
player.setScriptData("SIZEVAR", size_v);