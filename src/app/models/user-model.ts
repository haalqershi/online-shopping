
export class UserModel{

    constructor(public email: string, private _token: string, private _tokenExpirationDate: Date, private role?: string){}

    get token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null;
        }else{
            return this._token;
        }
    }
}