// Where user is sent if he enters wrong password
var keeperaltpage = "/denied";

// Where user is sent if he logs out
var keeperlogoutpage = "/logout";

var keeperAllUsers = new Array(

// Edit usernames & passwords below.
// Format: "username","password",
// Be sure to enclose each in quotes, and a comma after each.
// Be diligent here... one little mistake, and the whole script pukes
// Good practice would be to make passwords at least 7 characters long. Usernames a minimum of 3.
// Stick with alpha-numeric (letters and numbers)... ABC123abc  Dash(-) and underscore(_) are ok as well
// Avoid spaces and other characters... &@$/.*|#, etc. Some may work without incident, but others may cause problems.
// Usernames and passwords are CaSE SenSiTiVE.

"GuestAccess","GuestAccess123",
"AdminAccess","_AdMiN101AccEss_",

// This last user/pass may be whatever you wish.
// Just note that this set omits the last comma.
"xox","xox");

keeperPerformCheck();

/**  END OF FILE  *************/
