function toggleBeforeAfter(id) {
  const container = document.getElementById(id);
  const currentImg = container.querySelector('img');
  const isBefore = currentImg.src.includes('before');
  currentImg.src = isBefore
    ? currentImg.src.replace('before', 'after')
    : currentImg.src.replace('after', 'before');
}

const javaScreens = [
  {
    src: "images/Module3_1.png",
    caption: "Module 3.1 – Reads two integers and outputs their sum, difference, and product."
  },
  {
    src: "images/Module3_2.png",
    caption: "Module 3.2 – Outputs text in uppercase and lowercase."
  },
  {
    src: "images/module4_1.png",
    caption: "Module 4.1 – Assigns letter grades using if-else logic."
  },
  {
    src: "images/Module4_2.png",
    caption: "Module 4.2 – Calculates shipping cost by weight."
  },
  {
    src: "images/Module5_1.png",
    caption: "Module 5.1 – Compares two names for equality."
  },
  {
    src: "images/Module5_2.png",
    caption: "Module 5.2 – Sorts and displays names in alphabetical order."
  },
  {
    src: "images/Module6_2.png",
    caption: "Module 6.2 – Calculates future value adjusted for inflation."
  }
];

let currentJavaIndex = 0;
function toggleJavaProject() {
  currentJavaIndex = (currentJavaIndex + 1) % javaScreens.length;
  const img = document.querySelector('#java-projects img');
  const caption = document.querySelector('#java-projects .java-caption');
  img.src = javaScreens[currentJavaIndex].src;
  caption.textContent = javaScreens[currentJavaIndex].caption;
}
