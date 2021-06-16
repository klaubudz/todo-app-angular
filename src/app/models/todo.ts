export class Todo {
    public id: number;
    public isDone: boolean;
    public text: string;

    constructor(){
        this.id = 0;
        this.isDone = false;
        this.text = '';
    }
}