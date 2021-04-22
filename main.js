function getParagraph1() {
var inputs=[];
for (var i=1; i<=6; i++){
    inputs.push(document.getElementById("para1_input_box_" + i).value);
    inputs.join(".");
    document.getElementById("showParagraph1").innerHTML=inputs.join(".");  
    console.log(inputs);
}
}

function getParagraph2() {
    var inputs=[];
    for (var k=1; k<=6; k++){
        inputs.push(document.getElementById("para2_input_box_" + k).value);
        inputs.join(".");
        document.getElementById("showParagraph2").innerHTML=inputs.join(".");  
        console.log(inputs);
    }
    }