//! davaleba 1

const redomPromise = new Promise((reslove, reject) => {
  const randomNum = Math.floor(Math.random() * 10);

  if (randomNum > 5) {
    reslove('succesfull');
  } else {
    reject('unsuccesfull');
  }
});

async function testPromise() {
  try {
    const result = await redomPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
testPromise();

//! davaleba2

async function FasterResponse() {
  const data1 = fetch('https://dummyjson.com/users').then((response) =>
    response.json()
  );

  const data2 = fetch('https://jsonplaceholder.typicode.com/users').then(
    (response) => response.json()
  );

  try {
    const result = await Promise.race([data1, data2]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
FasterResponse();

//! davaleba 3

async function fetchThreeData() {
  const data1 = fetch('https://dummyjson.com/users').then((response) =>
    response.json()
  );

  const data2 = fetch('https://jsonplaceholder.typicode.com/users').then(
    (response) => response.json()
  );

  const data3 = fetch('https://janfsnffefbiewbiwbfifb').then((response) =>
    response.json()
  );

  try {
    const result = await Promise.allSettled([data1, data2, data3]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
fetchThreeData();

//! davlaeba 4

async function fetchDataArrays() {
  const data1 = fetch('https://dummyjson.com/users');

  const data2 = fetch('https://jsonplaceholder.typicode.com/users');

  try {
    const [res1, res2, res3] = await Promise.all([data1, data2]);

    const data = await Promise.all([res1.json(), res2.json()]);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchDataArrays();
