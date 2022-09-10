class user{
    constructor(){
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

class userservice extends user {
    constructor(){
        this.users = ["aurora", "belle", "ariel"];
        this.userid = userid;
    }

    getallusers() {
        return users;
    }

    getuserbyid(userid) {
        return users.filter(userid);
    }
}
