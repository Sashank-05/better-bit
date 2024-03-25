var localTheme = localStorage.getItem("Theme");

colorData = {
    "stereo": {
        "bg": "#21063a",
        "fg": "#c8bbf0",
        "bgspcl": "#0d0217",
        "cursor": "#c8bbf0",
        "color0": "#21063a",
        "color1": "#6e48db",
        "color2": "#9d329b",
        "color3": "#9752a5",
        "color4": "#9d3cd6",
        "color5": "#9a5ddc",
        "color6": "#c667e3",
        "color7": "#c8bbf0",
        "color8": "#8c82a8",
        "color9": "#6e48db",
        "color10": "#9d329b",
        "color11": "#9752a5",
        "color12": "#9d3cd6",
        "color13": "#9a5ddc",
        "color14": "#c667e3",
        "color15": "#c8bbf0",
        "url": "../images/stereo.bmp"
    },
    "silence": {
        "bg": "#251b1b",
        "fg": "#efe3c8",
        "bgspcl": "#140f0f",
        "cursor": "#efe3c8",
        "color0": "#251b1b",
        "color1": "#7c834f",
        "color2": "#a98d67",
        "color3": "#b08f6d",
        "color4": "#cca374",
        "color5": "#eec87a",
        "color6": "#d3b28a",
        "color7": "#efe3c8",
        "color8": "#a79e8c",
        "color9": "#7c834f",
        "color10": "#a98d67",
        "color11": "#b08f6d",
        "color12": "#cca374",
        "color13": "#eec87a",
        "color14": "#d3b28a",
        "color15": "#efe3c8",
        "url": "../images/bg.jpg"
    },
    "oled": {
        "bg": "black",
        "fg": "#989898",
        "url": "../images/oled.bmp"
    },
    "wave": {
        "bg": "#16181d",
        "fg": "#e3e3dd",
        "bgspcl": "#111317",
        "cursor": "#e3e3dd",
        "color0": "#16181d",
        "color1": "#738e9c",
        "color2": "#9ea5a0",
        "color3": "#ccbba0",
        "color4": "#d6c5aa",
        "color5": "#e5cba8",
        "color6": "#a8c0c3",
        "color7": "#e3e3dd",
        "color8": "#9e9e9a",
        "color9": "#738e9c",
        "color10": "#9ea5a0",
        "color11": "#ccbba0",
        "color12": "#d6c5aa",
        "color13": "#e5cba8",
        "color14": "#a8c0c3",
        "color15": "#e3e3dd",
        "url": "../images/water.jpg"
    },
    "cyber-night": {
        "bg": "#0b1118",
        "fg": "#efc09c",
        "bgspcl": "#040508",
        "cursor": "#efc09c",
        "color0": "#0b1118",
        "color1": "#584d43",
        "color2": "#962830",
        "color3": "#ee1c2b",
        "color4": "#b74246",
        "color5": "#ee6449",
        "color6": "#31a165",
        "color7": "#efc09c",
        "color8": "#a7866d",
        "color9": "#584d43",
        "color10": "#962830",
        "color11": "#ee1c2b",
        "color12": "#b74246",
        "color13": "#ee6449",
        "color14": "#31a165",
        "color15": "#efc09c",
        "url": "../images/cyber-night.jpg"
    },
    "evening": {
        "bg": "#0d121a",
        "fg": "#a4bddd",
        "bgspcl": "#040508",
        "cursor": "#a4bddd",
        "color0": "#0d121a",
        "color1": "#497198",
        "color2": "#4875B1",
        "color3": "#3975D3",
        "color4": "#437CD3",
        "color5": "#5686B4",
        "color6": "#6792B9",
        "color7": "#a4bddd",
        "color8": "#72849a",
        "color9": "#497198",
        "color10": "#4875B1",
        "color11": "#3975D3",
        "color12": "#437CD3",
        "color13": "#5686B4",
        "color14": "#6792B9",
        "color15": "#a4bddd",
        "url": "../images/evening.jpg"
    }
};

if (localTheme in colorData) {
    var themeColors = colorData[localTheme];

    for (const [key, value] of Object.entries(themeColors)) {
        if (key === "url") {
            document.documentElement.style.setProperty('--bg-image', `url(${themeColors.url})`);
        } else {
            document.documentElement.style.setProperty(`--${key}`, value);
        }
    }
}
