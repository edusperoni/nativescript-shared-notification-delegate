# Nativescript Shared Notification Delegate

This project aims to prevent the shortcomings that come from the iOS implementation of only allowing a single delegate.

## Installation

```javascript
tns plugin add nativescript-shared-notification-delegate
```

## Usage 

Import `SharedNotificationDelegate` and add Observers
	
```typescript
import { SharedNotificationDelegate } from 'nativescript-shared-notification-delegate';

...


SharedNotificationDelegate.addObserver({
    userNotificationCenterWillPresentNotificationWithCompletionHandler: (notificationCenter, notification, handler, stop, next) => {
        console.log("notification received by observer");
        // is this notification something I should handle?
        if (shouldHandleThis) {
            // do stuff
            // intercept it and show alert
            handler(UNNotificationPresentationOptions.Alert);
            return;
        }
        // not mine, next should handle
        next();
    }
});
```

## API

#### SharedNotificationDelegate Methods
| Method |  Description |
| --- | --- |
| addObserver(observer: `DelegateObserver`, priority?: `number`): `void` | Adds a delegate observer of a certain priority (lower means first). Default priority is 100. |
| removeObserver(observer: `DelegateObserver`) | removes a DelegateObserver |

#### DelegateObserver Interface

A DelegateObserver can implement 3 methods from `UNUserNotificationCenterDelegate` with the addition of some details:

```typescript
interface DelegateObserver {
    userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler?(center: any /* UNUserNotificationCenter */, response: any /* UNNotificationResponse */, completionHandler: () => void, next: () => void): void;
    userNotificationCenterOpenSettingsForNotification?(center: any /* UNUserNotificationCenter */, notification: any /* UNNotification */, stop: () => void, next: () => void): void;
    userNotificationCenterWillPresentNotificationWithCompletionHandler?(center: any /* UNUserNotificationCenter */, notification: any /* UNNotification */, completionHandler: (p1: any /* UNNotificationPresentationOptions */) => void, next: () => void): void;
}
```

All the functions are called asynchronously in a chain.

 Calling a `completionHandler` immediately stops the observer chain. `next()` **must** be called if the method will not be handling the notification.

 Calling `stop()` on `userNotificationCenterOpenSettingsForNotification` prevents the event bubbling to the rest;

Only one method will be processed at a time, this means you can take as long as you want (including making http calls, for example), as long as you just call `completionHandler`, `stop` and `next` when you're finished.

    
## License

Apache License Version 2.0, January 2004
