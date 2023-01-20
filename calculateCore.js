import { Util } from "./CalculateClass.js";
const calculator = new Util();

const currentLv = document.querySelector("#current_level");
const destinyLv = document.querySelector("#destiny_level");
const equipmentLv = document.querySelector("#equipment_level");
const calculateBtn = document.querySelector("#calculate_btn2");
const result = document.querySelector("#result_need_core");
const isExpBoost = document.querySelector("#exp_boost");

function calculateNeedCore(e){
    e.preventDefault();

    const needCore = calculator.calculateNeedCore(currentLv.value,destinyLv.value,equipmentLv.value,isExpBoost.value);
    result.innerHTML = `코어 필요한 양 : ${needCore}`;
}

calculateBtn.addEventListener("click",calculateNeedCore);