//git config --global user.email "test@gmai.com"
//git config --global user.name "testName"
// 1.git init
// 2.git add .
// 3. git commit -m "Init"
// 4. git push

const files = ["cat.jpg","Virus.exe","dog.jpg","document.pdf",];

for (const file of files){
    if (file==="cat.jpg"){
        console.log("Данную картинку пропускаем");
        continue;
    }


    if (file === "Virus.exe"){
        console.log("Обнаружен вирус");
        break;
    }
    console.log("Файл проверен")
}
 
for (const file of files){
console.log(file)
}
let fuel = 100;
while (fuel>0){
    console.log("Едем "+"Топлива осталось: "+ fuel);
    fuel-=10; //fuel = fuel-10
}
console.log("Приехали")
// for (Старт ,Финиш,Шаг)

for (let i = 1; i<= 5;i++){

console.log("Отжимания номер "+i)
}



