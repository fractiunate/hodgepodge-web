import './app.css';
import '@fortawesome/fontawesome-free/css/all.css';
import logoUrl from '../logo.svg'
// style="transform: scaleX(1.1)"
// filterit 
document.querySelector('#app').innerHTML = `
  <main class="flex flex-col text-white h-screen selection:bg-purple-600">
    <div class="flex items-center h-10 p-8 w-full">

      <a href="/" class="text-gray-400"><img src="${logoUrl}" alt="Logo"  class="filterit p-2 w-48 scale-105 hover:scale-110 hover:drop-shadow transition-transform duration-300"></a>
      <div class="flex gap-4 ml-auto">
        <a href="https://github.com/fractiunate" class="text-white hover:text-gray-400 hover:scale-110 hover:drop-shadow transition-transform duration-300">Github</a>
        <a href="#" class="text-white hover:text-gray-400 hover:scale-110 hover:drop-shadow transition-transform duration-300">Linked.in</a>
        <a href="#" class="text-white hover:text-gray-400 hover:scale-110 hover:drop-shadow transition-transform duration-300">Contact</a>
      </div>
    </div>
    <div class="content flex flex-col items-center justify-center flex-grow mb-20">
      <div class="text-center max-w-2xl">
        <h1 class="text-4xl">
        <div class="flex font-mono tems-center">
          <p class="ml-24 mr-4 inline-block">This is</p>
          <p class="inline-block font-bold text-left border-r typewriter text-4xl overflow-hidden whitespace-nowrap ">Fractiunate.me</p></span>
          <div class="flex-grow"></div>
        </div>
        </h1>
        <p class="mt-4 text-md"><span>Quality Software Engineering & Cloud Architecture</span> made in Berlin.</p>
        <p class="mt-1" text-md">Currently working for <a href="https://gebit.de"><span class=" hover:underline font-semibold">GEBIT Solutions GmbH</span></a>.</p>
      </div>
    </div>
  </main>
`;

document.addEventListener("visibilitychange", async function () {
  if (!document.hidden) {
    await sleep(1000);
    if (!updating) animationEnded();
  }
});

let updating = false;
const animated = document.querySelector(".typewriter");

let typewriterInputTexts = [
  { text: 'Fractiunate.me', weight: 1 },
  { text: 'engineering.', weight: 0 },
  { text: 'up and running.', weight: 0 },
  { text: 'quality.', weight: 0 },
  { text: 'architecture.', weight: 0 },
  { text: 'software.', weight: 0 },
  { text: 'coding.', weight: 0 },
  { text: 'your next level.', weight: 0 },
  { text: 'the Cloud.', weight: 0 },
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animationEnded() {
  updating = true;

  const wait_time = 1000;

  let minWeight = Math.min(...typewriterInputTexts.map(x => x.weight));

  let filteredTexts = typewriterInputTexts.filter((x) => x.weight === minWeight);
  console.log(minWeight, filteredTexts);
  let randomText = filteredTexts[Math.floor(Math.random() * filteredTexts.length)].text;
  console.log(randomText);
  typewriterInputTexts = typewriterInputTexts.map((x) => {
    if (x.text === randomText) {
      x.weight += 1;
    }
    return x;
  });

  const textLength = randomText.length;
  animated.style.animation = `typing ${textLength / 10}s steps(${textLength}), cursor 1s steps(1) infinite`;
  await sleep(wait_time);
  animated.classList.add('bg-purple-600');
  await sleep(wait_time);
  animated.innerHTML = '';
  animated.classList.remove('bg-purple-600');
  await sleep(wait_time);
  animated.getAnimations().forEach((animation) => animation.cancel());
  animated.style.animation = 'none';
  await sleep(50);
  animated.style.animation = '';
  animated.getAnimations().forEach((animation) => animation.play());
  animated.innerHTML = randomText;
  updating = false;


}

animated.addEventListener("animationend", () => {
  if (!updating) {
    animationEnded();
  }
});