export class Users {
    public id: number;
    public username: string;
    public pwd:string;
    public email:string;
    
    constructor(id:number,username: string,pwd:string,email:string) {
        this.id = id;
        this.username = username;
        this.pwd = pwd;
        this.email = email;
    }
}