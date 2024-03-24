var localTheme = localStorage.getItem("Theme")
colorData = {
    "stereo": {
        "bg": "#21063a",
        "fg": "#c8bbf0",
        "url": "../images/stereo.bmp"
    },
    "silence": {
        "bg": "#5f443a",
        "fg": "#f7e3ac",
        "url": "../images/bg.jpg"
    }
}
if (localTheme in colorData) {
    var themeColors = colorData[localTheme];

    document.documentElement.style.setProperty('--bg', themeColors.bg);
    document.documentElement.style.setProperty('--fg', themeColors.fg);
    document.documentElement.style.setProperty('--bg-image', `url(${themeColors.url})`);

}