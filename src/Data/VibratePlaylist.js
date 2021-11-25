const playlist = {
  simpsons: [
    166, 320, 128, 257, 103, 249, 71, 145, 138, 366, 119, 273, 120, 248, 79,
    121, 71, 121, 63, 113, 63, 129, 263, 665, 103, 112, 64, 113, 63, 105, 63,
    129, 119, 521, 71, 129, 63, 120, 56, 149, 107,
  ],

  ghostBusters: [
    592, 184, 632, 144, 584, 169, 534, 282, 96, 159, 95, 161, 104, 24, 88, 40,
    120, 152, 592, 184, 632, 144, 584, 169, 534, 282, 96, 159, 95, 161, 104, 24,
    88, 40, 120, 152,
  ],

  mario: [87, 89, 104, 176, 96, 176, 88, 88, 79, 241, 176, 377, 191],

  powerRangers: [150, 150, 150, 150, 75, 75, 150, 150, 150, 150, 450],

  mortalKombat: [
    100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100, 100, 100, 200, 100,
    200, 100, 200, 100, 200, 100, 100, 100, 100, 100, 200, 100, 200, 100, 200,
    100, 200, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 50, 50, 100,
    800,
  ],

  jamesbond: [
    200, 100, 200, 275, 425, 100, 200, 100, 200, 275, 425, 100, 75, 25, 75, 125,
    75, 25, 75, 125, 100, 100,
  ],

  starwars: [
    500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170,
    40, 500,
  ],

  morsecode: [
    100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30,
    100,
  ],

  gameOfThrones: [
    950, 50, 530, 80, 100, 100, 100, 60, 930, 50, 530, 80, 100, 100, 100, 60,
    980,
  ],

  survivor: [
    700, 150, 150, 150, 150, 150, 150, 1000, 150, 150, 150, 150, 150, 700, 150,
    150, 150, 150, 150, 0, 2000,
  ],
};

const $buttons = document.querySelector('[data-box="buttons"]');
const $textSupport = document.querySelector('p[data-js="support"]');

const isSupported = "vibrate" in navigator;

const vibrate = (music) => navigator.vibrate(playlist[music]);

const supportedMessage = (is) =>
  is ? "You browser supports" : "You browser does not supports";

$textSupport.innerHTML = supportedMessage(isSupported);

if (isSupported) {
  $buttons.addEventListener("click", (e) => {
    const music = e.target.dataset[" js "];
    vibrate(music);
  });
}
export default playlist;
