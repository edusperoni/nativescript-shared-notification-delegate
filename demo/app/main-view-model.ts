import { Observable } from 'tns-core-modules/data/observable';
import { SharedNotificationDelegate } from 'nativescript-shared-notification-delegate';
import { isIOS } from 'tns-core-modules/platform';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();
    if (isIOS) {
      SharedNotificationDelegate.addObserver({
        userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler: (ncenter, resp, handler, stop, next) => {
          console.log(ncenter, resp);
          stop();
        }
      });
    } else {
      console.log("This application will only work in iOS")
    }
  }
}
