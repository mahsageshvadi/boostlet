const script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://localhost:8000/dist/boostlet.min.js";
//script.src = "https://mpsych.github.io/boostlet/dist/boostlet.min.js";
script.onload = run;
document.head.appendChild(script);
eval(script);


function run() {
  
  // detect visualization framework
  Boostlet.init();

  image = Boostlet.get_current_image();

  kernel = [
    -1, 0, 1,
    -2, 0, 2,
    -1, 0, 1
  ];

  filtered = Boostlet.filter(image.data, image.width, image.height, kernel);

  Boostlet.set_current_image( filtered );

}
