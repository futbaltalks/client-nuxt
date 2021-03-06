export default {

    mode: "universal",
    /*
     ** Headers of the page
     */



    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        script: [
            {
                src:
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-n-t0gTNKRELtjcPc7pPCS1z2fY9eeSY&libraries=places"
            }
        ]
    }
}