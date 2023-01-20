const tsPrice = document.querySelector("#tech_scrap_price");
const atpPrice = document.querySelector("#ammp_tech_parts_scrap");
const mtPrice = document.querySelector("#medical_parts_scrap");
const calculateBtn = document.querySelector("#calculate_btn1");
const result = document.querySelector("#result_price");

function calculatePrice(e) {
    e.preventDefault();
    result.innerHTML = `재료의 총 가격 : ${(tsPrice.value * 20 + atpPrice.value * 20 + mtPrice.value * 40) / 4}BTC`;
}

calculateBtn.addEventListener("click", calculatePrice);