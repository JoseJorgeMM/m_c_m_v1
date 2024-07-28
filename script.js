function generateProblem() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    document.getElementById('problem').textContent = `Calcular el MCM de ${num1} y ${num2}`;
    document.getElementById('solution').textContent = '';
    document.getElementById('explanation').innerHTML = '';
    explainMCM(num1, num2);
}

function explainMCM(num1, num2) {
    const explanation = document.getElementById('explanation');
    const steps = [];

    steps.push(`Paso 1: Identificar los múltiplos de ${num1} y ${num2}.`);
    const multiples1 = getMultiples(num1, 10);
    const multiples2 = getMultiples(num2, 10);
    steps.push(`Múltiplos de ${num1}: ${multiples1.join(', ')}`);
    steps.push(`Múltiplos de ${num2}: ${multiples2.join(', ')}`);

    steps.push(`Paso 2: Identificar el primer múltiplo común.`);
    const mcm = findMCM(num1, num2);
    steps.push(`El primer múltiplo común es ${mcm}.`);

    steps.push(`Paso 3: Verificar que ${mcm} es divisible por ambos números.`);
    steps.push(`${mcm} ÷ ${num1} = ${mcm/num1}`);
    steps.push(`${mcm} ÷ ${num2} = ${mcm/num2}`);

    steps.push(`Por lo tanto, el MCM de ${num1} y ${num2} es ${mcm}.`);

    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step';
        stepElement.textContent = step;
        explanation.appendChild(stepElement);
        setTimeout(() => stepElement.classList.add('visible'), index * 2000);
    });

    setTimeout(() => {
        document.getElementById('solution').textContent = `MCM(${num1}, ${num2}) = ${mcm}`;
    }, steps.length * 2000);
}

function getMultiples(num, count) {
    const multiples = [];
    for (let i = 1; i <= count; i++) {
        multiples.push(num * i);
    }
    return multiples;
}

function findMCM(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// Generar el primer problema al cargar la página
generateProblem();
