const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

async function inverter() {
    let input =  await askQuestion("Insira a string que você quer inverter: ")
    let inverter = input.split('').reverse().join('')
    console.log(`string invertida: ${inverter}\n`)
    vogaisCont()
}

async function vogaisCont() {
    input = await askQuestion("Insira a string que você quer as vogais: ");
    
    // Declare num outside the loop
    let num = 0;
    
    // Define the vowels to check against
    const vowels = 'aeiouAEIOU';
    
    // Iterate through the string to count vowels
    for (let i = 0; i < input.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(input[i])) {
            num++;
        }
    }
    
    // Log the result
    console.log(`número de vogais na string ${input}: ${num}\n`);
    
    CezarCypher()
}

async function CezarCypher(){
    input = await askQuestion('Insira a string que você quer encriptar: ')
    input = input.toLowerCase().trim()
    
    // Initialize the arrays as empty before using them
    let arrayNum = []
    let arrayChar = []

    for(i=0;i<input.length;i++){
        arrayNum[i] = input.charCodeAt(i)
    }


    let encrypt = await askQuestion('Insira um número para ser usado na cypher: ')
    encrypt = parseInt(encrypt)
        if(isNaN(encrypt) || encrypt < 0 || encrypt > 26){
        console.log('número inválido!')
        CezarCypher()
    }

    for(i=0;i<arrayNum.length;i++){
        arrayNum[i] += encrypt // Changed from =+ to +=
        if(arrayNum[i] > 122){
            arrayNum[i] -= 26 // Changed from =- to -=
        }
    }
    
    // This part is also incorrect, see explanation below
    for(i=0;i<arrayNum.length;i++){
        arrayChar[i] = String.fromCharCode(arrayNum[i])
    }

    input = arrayChar.join('')

    console.log(`string criptografada: ${input}\n`)
    removerDuplicadas()
}

async function removerDuplicadas(){
    input = await askQuestion('Insira a string que você quer remover qualquer caractér repetido: ')
    let array = input.split('')

    for(i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){
            if(array[i] === array[j] && i !== j){
                array.splice(j, 1)
            }
        }
    }
    input = array.join('')
    console.log(`nova string sem elementos duplicados: ${input}\n`)
    vogaisContAdv()
}

async function vogaisContAdv() {
    input = await askQuestion("Insira a string que você quer as vogais: ");
    
    let numA = numE = numI = numO  = numU = 0;
    
    for (let i = 0; i < input.length; i++) {
        switch(input.charCodeAt(i)) {
            case 65: 
            case 97: numA++
            break
            case 69:
            case 101: numE++
            break
            case 73:
            case 105: numI++
            break
            case 79:
            case 111: numO++
            break
            case 85: 
            case 117: numU++
            break
        }
    }
    
    // Log the result
    console.log(`string: ${input} \nnúmero de "A": ${numA} \nnúmero de "E": ${numE} \nnúmero de "I": ${numI} \nnúmero de "O": ${numO} \nnúmero de "U": ${numU}`);
    
    rl.close()
}

inverter()