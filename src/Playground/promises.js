const promise = new Promise((resolve, reject) => {
  resolve("This is my resolved datea");
});

promise.then(data => {
  console.log(data);
});
