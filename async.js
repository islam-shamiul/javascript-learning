//
async function hello() {
  return "Hello Alligator!";
}

const b = hello();

b.then((x) => console.log(x)); // Hello Alligator!
