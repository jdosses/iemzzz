window.onload = function() {
        // Get the user agent string
        var userAgent = window.navigator.userAgent;

        // Find the link elements by their IDs
        var windowsLink = document.getElementById('windowsLink');
        var macLink = document.getElementById('macLink');
        var linuxLink = document.getElementById('linuxLink');
        var androidLink = document.getElementById('androidLink');
        var iosLink = document.getElementById('iosLink'); // Add a new link for iOS
        var desktopLink = document.getElementById('desktopLink'); // Add a new link for desktop

        var fallbackLink = "https://jdosses.github.io/ar-box/mindar.html"; // Set your fallback URL here
        var desktopFallbackLink = "https://jdosses.github.io/ar-box/mindar.html"; // Set your desktop fallback URL here

        if (userAgent.indexOf("Win") !== -1) {
            // User is on a Windows operating system
            windowsLink.click();
        } else if (userAgent.indexOf("Macintosh") !== -1) {
            // User is on a macOS operating system
            macLink.click();
        } else if (userAgent.indexOf("Linux") !== -1) {
            // User is on a Linux operating system
            linuxLink.click();
        } else if (userAgent.indexOf("Android") !== -1) {
            // User is on an Android device
            androidLink.click();
        } else if (userAgent.indexOf("iPhone") !== -1 || userAgent.indexOf("iPad") !== -1) {
            // User is on an iOS device
            iosLink.click();
        } else {
            // User's operating system is not recognized, use the fallback link
            if (userAgent.indexOf("Mobile") === -1) {
                // User is on a desktop (not a mobile device)
                window.location.href = desktopFallbackLink;
            } else {
                // User is on a mobile device (not iOS)
                window.location.href = fallbackLink;
            }
        }
    };

    const linkElement = document.getElementById("iosLink");

    linkElement.addEventListener("message", function (event) {
        if (event.data === "_apple_ar_quicklook_button_tapped") {
            // Handle the user tap.
            // You can open a different URL, display a message, or perform any other action here.
            const customUrlToOpen = "https://osses.com.co"; // Replace with your custom URL
            window.open(customUrlToOpen, '_self');
        }
    }, false);
