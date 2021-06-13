/*let p = "amazing";
if (p === "amazing") alert("JS is fun")

console.log(40 + 14 + 1 - 10)*/

/*let markMass = 78;
let johnMass = 92;
let markHight = 1.69;
let johnHight = 1.95;*/

/*let markMass = 95;
let johnMass = 85;
let markHight = 1.88;
let johnHight = 1.76;

let markBmi = markMass/markHight**2;
console.log(markBmi);
let johnBmi=johnMass/johnHight**2;
console.log(johnBmi);
// let markHighrerBmi = markBmi>johnBmi;
// console.log(markHighrerBmi);

if(markBmi>johnBmi)
{
    console.log("Mark's bmi is higher than John's");
}
else
{
    console.log("John's bmi is higher than Mark's");
}

if(markBmi>johnBmi)
{
    console.log(`Mark's bmi (${markBmi}) is higher than John's(${johnBmi})`);
}
else
{
    console.log(`John's bmi (${johnBmi}) is higher than Mark's (${markBmi})`);
}*/

/*let dolphins_Avg = (96+108+89)/3;
let koalas_Avg = (88+91+110)/3;
console.log("avarage score for Dolphins",dolphins_Avg);
console.log("avarage score for Koalas",koalas_Avg);
if(dolphins_Avg>koalas_Avg){
    console.log("Dolphins are the winner")
}
else if (dolphins_Avg==koalas_Avg)
{
    console.log("match is draw");
}
else
{
    console.log("Koalas are winner");
}*/

/*let dolphins_Avg = (97+112+101)/3;
let koalas_Avg = (109+95+123)/3;
console.log("avarage score for Dolphins",dolphins_Avg);
console.log("avarage score for Koalas",koalas_Avg);
if(dolphins_Avg>koalas_Avg && dolphins_Avg>=100){
    console.log("Dolphins are the winner")
}
else if (dolphins_Avg===koalas_Avg)
{
    console.log("match is draw");
}
else if (koalas_Avg>dolphins_Avg && koalas_Avg >=100)
{
    console.log("Koalas are winner");
}*/

/*let dolphins_Avg = (97+112+101)/3;
let koalas_Avg = (109+95+106)/3;
console.log("avarage score for Dolphins",dolphins_Avg);
console.log("avarage score for Koalas",koalas_Avg);
if(dolphins_Avg>koalas_Avg && dolphins_Avg>=100){
    console.log("Dolphins are the winner")
}
else if (dolphins_Avg===koalas_Avg &&dolphins_Avg>=100 && koalas_Avg>=100)
{
    console.log("match is draw");
}
else if (koalas_Avg>dolphins_Avg && koalas_Avg >=100)
{
    console.log("Koalas are winner");
}*/

let tip;
let bill = 275;
tip = bill>50 && bill < 300 ? (bill*15)/100 : (bill*20)/100
console.log(tip)
console.log(`the bill was ${bill},the tip was ${tip}, and the total value ${bill+tip}`)

