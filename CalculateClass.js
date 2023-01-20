export class Util{

    calculateLevelupExp(current,destiny){
        let result = 0;
        for(let i = current; i<destiny;i++){
            console.log(`${i}레벨의 필요경험치 : ${Math.ceil(i**3.1*8)}`);
            result = Math.ceil(result+i**3.1*8);
            console.log(`${result} 이군요`);
        }
        return result;
    }

    calculateNeedCore(currentLv,destinyLv,equipmentLv,isExpBoost){
        const needExp = this.calculateLevelupExp(currentLv,destinyLv);
        const coreExp = isExpBoost==="true"?(equipmentLv**1.8+16)*1.1*12*1.8:(equipmentLv**1.8+16)*1.1*12;
        return Math.ceil(needExp/coreExp);
    }
}