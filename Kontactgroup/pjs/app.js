/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 45,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "color": {
                "value": "#b8e890"
            },
            "shape": {
                "type": "polygon",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.3667186184709502,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 0.1,
                    "opacity_min": 0.1,
                    "sync": true
                }
            },
            "size": {
                "value": 50.84336947734265,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 12.80405405405404,
                    "size_min": 19.42567567567566,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 350.0354216847388,
                "color": "#e8e790",
                "opacity": 1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 2600,
                    "rotateY": 2200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": false
            },
            "modes": {
                "grab": {
                    "distance": 392.73648648648617,
                    "line_linked": {
                        "opacity": 0.5735466584486847
                    }
                },
                "bubble": {
                    "distance": 800,
                    "size": 50,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 4
                },
                "repulse": {
                    "distance": 200,
                    "duration": 14
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },


        "retina_detect": true,
        "config_demo": {
            "hide_card": true,
            "background_color": "#009b94",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);