import { Observable } from 'tns-core-modules/data/observable';
import { SharedNotificationDelegate } from 'nativescript-shared-notification-delegate';

export class HelloWorldModel extends Observable {
  public message: string;
  private sharedNotificationDelegate: SharedNotificationDelegate;

  constructor() {
    super();

    this.sharedNotificationDelegate = new SharedNotificationDelegate();
    this.message = this.sharedNotificationDelegate.message;
  }
}
