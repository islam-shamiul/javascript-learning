/*const calcAverage = (sccore1,sccore2,sccore3) => {
    console.log((sccore1+sccore2+sccore3)/3);
    return (sccore1+sccore2+sccore3)/3;
    
}

function checkWinner(avgDolphins,avgKoala)
{
    if (avgDolphins>=avgKoala*2)
    {
         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoala})`);
    }
    else if(avgKoala>=avgDolphins*2) {
         console.log(`Koalas win (${avgKoala} vs. ${avgDolphins})`);
    }
    else{
        console.log("No team win");
    }
}
const avgDolphins=calcAverage(85,54,41);
const avgKoala = calcAverage(23,34,27);
const avgDolphins=calcAverage(44,23,71);
const avgKoala = calcAverage(65,54,49);


checkWinner(avgDolphins,avgKoala)*/
/*const bills =[125,555,44];
const tips = [];
function calcTip(bill)
{
    if (bill>50 && bill<300)
    {
        return bill*.15;
    }
    else{
        return bill*.2;
    }
}

tips[0]=(calcTip(bills[0]));
tips[1]=(calcTip(bills[1]));
tips[2]=(calcTip(bills[2]));

const total = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]]
console.log(total);*/

/*const mark = {
    fullName:"Mark Miller",
    mass: 78,
    height:1.69,
    clacBMI: function(){
        this.BMI=this.mass/this.height**2;
        return this.BMI;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height:1.95,
    clacBMI: function(){
        this.BMI= this.mass/this.height**2;
        return this.BMI;
    }
}

console.log (mark.clacBMI());
console.log(john.clacBMI());
if(mark.BMI>john.BMI)
{
    console.log(`${mark.fullName}'s BMI(${mark.BMI}) is higher than ${john.fullName}'s BMI(${john.BMI})`);
}
else{
    console.log(`${john.fullName}'s BMI(${john.BMI}) is higher than ${mark.fullName}'s BMI(${mark.BMI})`);
}*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
function calcTip(bill) {
  if (bill > 50 && bill < 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills, tips, total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(total));
