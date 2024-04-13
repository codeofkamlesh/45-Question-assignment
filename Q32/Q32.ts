let current_users = ["kamlesh", "ALI", "hamzah", "ameen", "daniyal"];
let new_users = ["zia khan", "awais", "faheem", "kamlesh", "DANIYAL"];

new_users.forEach(new_users_check => {
    let result = current_users.some(current_users_checking => current_users_checking.toLowerCase() === new_users_check.toLowerCase())
    //some function will compare both arrays after converting their variables in lower case.
    //when result is true it will run if condition otherwise it will run false condition
    if(result){
        
        console.log(`${new_users_check} user already exist, write a new username`);
        
    } else{
        console.log(`${new_users_check} user name is available`);
        
    }
});
