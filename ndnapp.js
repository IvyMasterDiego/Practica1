const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question('Quien eres?',name=>{console.log(`Hello ${name}!`);
readline.close();
});