let tempConverter = () => {
    let tempValue = document.getElementById("tempVal").value;
    // console.log(tempValue);

    // for getting values from options there is two options available
    // 1
    // let conVal = document.getElementById("tempOpt").value;
    // console.log(conVal);

    // 2
    let tempSelected = document.getElementById("tempOpt");
    const valueTemp = tempOpt.options[tempSelected.selectedIndex].value;
    // let showTemp = document.getElementById("tmepResult");
    let result;

    let celToFah = (conVal) => {
        return Math.round(((conVal * 9 / 5) + 32));
    }

    let fahToCel = (conVal) => {
        return Math.round(((conVal - 32) * 5 / 9));
    }

    if (valueTemp == "cel") {
        result = celToFah(tempValue);
        document.getElementById("tempResult").innerHTML = ` = ${result} Farehenite`;
        // console.log(result);
    } else {
        result = fahToCel(tempValue);
        document.getElementById("tempResult").innerHTML = ` = ${result} Celcius`;
    }
}