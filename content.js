window.addEventListener("message", (event) => {
    let d = event.data
    try {
        d = JSON.parse(d)
    } catch (e) {

    }
    try {
        d = JSON.stringify(d, null, 2)

    } catch (e) {

    }
    console.log(`%cPOST MESSAGE\n%cFrom: ${event.origin}\nTo: ${window.location.href}\n%c%s`,
        "color: yellow; font-weight: bold;",
        "color: lightblue; font-weight: bold;",
        "color: lightgreen; font-weight: bold;",
        d
    )
});
