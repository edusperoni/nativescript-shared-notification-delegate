var SharedNotificationDelegate = require("nativescript-shared-notification-delegate").SharedNotificationDelegate;
var sharedNotificationDelegate = new SharedNotificationDelegate();

describe("greet function", function() {
    it("exists", function() {
        expect(sharedNotificationDelegate.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(sharedNotificationDelegate.greet()).toEqual("Hello, NS");
    });
});