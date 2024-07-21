let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

if(isLoggedIn){
    if(userRole === "admin"){
        accessLevel = "full access granted";
        userMessage = "Welcome, Admin!";
    }else if(userRole === "manager"){
        accessLevel = "limited access granted";
        userMessage = "Welcome, User!";
    }else{
        accessLevel = "no access granted";
        userMessage = "Please log in to access the system";
    }
}

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default: 
        userCategory = "Unknown";
}

console.log("Access Level:" , accessLevel);
console.log("User Message:" , userMessage);
console.log("User Type:", userCategory);
console.log("Authentication Status:", authenticationStatus);