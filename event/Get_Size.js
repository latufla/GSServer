// ====================================================================================================
//
// Cloud Code for Get_Size, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var player = Spark.getPlayer()
var size_v = player.getScriptData("SIZEVAR");
Spark.setScriptData("SIZE", size_v);