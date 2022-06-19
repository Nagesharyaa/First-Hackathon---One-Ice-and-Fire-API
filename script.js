const bookContainer = document.getElementById("book-container");

async function dataFetch() {
  // fetch data from the url
  const res = await fetch("https://anapioficeandfire.com/api/books");
  // convert to object
  const jsonRes = await res.json();

  return jsonRes;
}

function createElementFunc(textBefore, value) {
  const createdElement = document.createElement("div");
  createdElement.innerHTML = `${textBefore} :--- ${value}`;
  return createdElement;
}

function appendToDom(secondElement) {
  bookContainer.appendChild(secondElement);
}

function createAndAppend(preText, value) {
  let element = createElementFunc(preText, value);
  appendToDom(element);
}

function createHr() {
  const Hr = document.createElement("hr");
  appendToDom(Hr);
}

async function displayBookDetails() {
  const data = await dataFetch();

  data.forEach((element) => {
    createAndAppend("Book Title", element.name);
    createAndAppend("Page count", element.numberOfPages);
    createAndAppend("Publisher", element.publisher);
    createAndAppend("Publish date", element.released);
    createAndAppend("Country", element.country);

    createHr();
  });
}
