
export class StoreInfo{

    constructor(private name?: string, private size?: number){
       
    }

    welcome(){
        console.log('Welcome to the ' + this.name + 'and our size is' + this.size);
    }

}