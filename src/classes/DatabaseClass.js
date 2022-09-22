
export class DatabaseClass{
    constructor(){
        this.db = [];
    }
    save(content,date){
        const obj = {
            content : content,
            date : date
        }
        this.db.push(obj);
    }

    inquire(){
        return this.db;
    }

    delete(content){
        for(let i in this.db){
            if(this.db[i].content === content){
                this.db.splice(i,1);
            }
        }
    }
}