export class Auth {
    token = ""
    username = ""
    permiso = "";

    static auth = new Auth("");

    constructor(_token, _username, _permiso){
        this.token = _token;
        this.username = _username;
        this.permiso = _permiso;
    }

    getToken(){
        return this.token;
    }

    getUsername(){
        return this.username;
    }

    getPermiso(){
        return this.permiso;
    }
}