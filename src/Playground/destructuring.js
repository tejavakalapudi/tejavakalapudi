//Object destructuring

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-published" } = book.publisher;

console.log(publisherName);

//Array destructuring

const item = ["Coffee(hot)", "$2.00", "$2.50", "$2.75"];

const [coffeeType, , priceOfMedium] = item;

console.log(`A medium ${coffeeType} costs ${priceOfMedium}`);
