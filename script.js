document.getElementById('grade-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const prelimGrade = parseFloat(document.getElementById('prelim-grade').value);
    const targetGrade = parseFloat(document.getElementById('target-grade').value);

    const prelimWeight = 0.20;
    const midtermWeight = 0.30;
    const finalWeight = 0.50;

    function calculateGrades(prelimGrade, targetGrade) {
        const remainingGrade = targetGrade - (prelimWeight * prelimGrade);

        if (midtermWeight + finalWeight === 0) {
            return [null, null];
        }

        let reqFinalGrade = (remainingGrade - (midtermWeight * 100)) / finalWeight;
        let reqMidtermGrade;

        if (reqFinalGrade > 100) {
            reqMidtermGrade = (remainingGrade - (finalWeight * 100)) / midtermWeight;
            if (reqMidtermGrade < 0 || reqMidtermGrade > 100) {
                return [null, null];
            }
            return [reqMidtermGrade, 100];
        }

        if (reqFinalGrade < 0) {
            return [null, null];
        }

        return [100, reqFinalGrade];
    }

    const [midtermGrade, finalGrade] = calculateGrades(prelimGrade, targetGrade);

    if (midtermGrade === null || finalGrade === null) {
        document.getElementById('results').classList.add('hidden');
        alert('It is not possible to achieve the target grade with the given prelim grade.');
    } else {
        document.getElementById('midterm-result').textContent = `Midterm Grade: ${midtermGrade.toFixed(2)}`;
        document.getElementById('final-result').textContent = `Final Grade: ${finalGrade.toFixed(2)}`;
        document.getElementById('results').classList.remove('hidden');
    }
});

let container = document.getElementById('container2');
let count = 50;
for(var i = 0; i<50; i++){
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 50);
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    let blurSnow = Math.floor(Math.random() * 10);
    console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container.appendChild(div);
}