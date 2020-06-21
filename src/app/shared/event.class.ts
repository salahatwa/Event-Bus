// Here we are defining an interface for a Function that accepts two arguments and
// returns nothing (in this case, it's the typical Node.js callback pattern).
export interface ICallback {
	( error: Error, result?: any ) : void;
} 

export class EventData {
    name: string;
    value: any;
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}


export enum Events{
    SelectArticleDetail,ReadArticleDetail
}