export class Auth {
    token = "";

    static auth = new Auth("");

    constructor(_token){
        this.token = _token;
    }

    getToken(){
        return this.token;
    }
}