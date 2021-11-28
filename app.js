let outputCode = document.querySelector(".css-code");

let inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function (inp) {
    inp.addEventListener("change", createBlob);
});

let sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function (slider) {
    slider.addEventListener("input", createBlob);
});

inputs.forEach((input) => {
    input.addEventListener("change", createBlob);
});

function createBlob() {
    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;

    let height = inputs[0].value;
    let width = inputs[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${
        100 - radiusThree
    }% ${radiusThree}% /  ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${
        100 - radiusFour
    }%`;
    document.getElementById(
        "blob"
    ).style.cssText = `border-radius: ${borderRadius}; height: ${height}px; width: ${width}px`;

    outputCode.value = `border-radius: ${borderRadius}`;
}

document.getElementById("copyBtn").addEventListener("click", function () {
    outputCode.select();
    document.execCommand("copy");
    alert("Code Copied");
});

createBlob();
