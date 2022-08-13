export class UserModel{
    constructor(public email: string, private _token: string, private _tokenExperationDate: Date, private role?: string){}

    get token(){
        if(!this._tokenExperationDate || new Date() > this._tokenExperationDate){
            return null;
        }else{
            return this._token;
        }
    }
}