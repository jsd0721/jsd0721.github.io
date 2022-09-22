
export class DatabaseClass{
    get(){
        const result = [];
        const keys = Object.keys(localStorage);
        for(let key in keys){
            result.push(JSON.parse(localStorage.getItem(keys[key])));
        }
        return result;
    }
    save(content,date){
        const idValue = localStorage.key(localStorage.length)?localStorage.length+1:localStorage.length;
        const obj = {
            id : idValue,
            content : content,
            date : date,
            isChecked:false
        }
        localStorage.setItem(idValue,JSON.stringify(obj));
    }
    delete(id){
        if(!Object.keys(localStorage).includes(id.toString())){
            alert("해당하는 데이터가 없습니다");
        }else{
            localStorage.removeItem(id);
        }
    }
}

