const button = document.querySelector("button");

function getData() {
  const fetchPromise = fetch("./data.txt");
  const textPromise = fetchPromise.then((response) => response.text());
  textPromise.then((data) => {
    console.log("Data:", data);
    const array = data.split("\n");
    console.log("Array:", array);
    const sortedArray = array.sort();
    console.log("Sorted Array:", sortedArray);
    const ul = document.querySelector("ul");
    sortedArray.forEach((element, index) => {
      const li = document.createElement("li");
      li.textContent = element;
      const colors = ["lightblue", "lightgreen", "lightyellow", "lightpink", "lightcoral"];
      li.style.backgroundColor = colors[index % colors.length];

      ul.append(li);
    });
  });
}

button.addEventListener("click", getData);
