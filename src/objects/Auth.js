export class Auth {
    token = ""
    username = "";

    static auth = new Auth("");

    constructor(_token, _username){
        this.token = _token;
        this.username = _username;
    }

    getToken(){
        return this.token;
    }
    getUsername(){
        return this.username;
    }
}