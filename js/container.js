function loadScript(src) {
    let script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.defer = true;
    document.body.append(script);
}

loadScript("./js/min.js");