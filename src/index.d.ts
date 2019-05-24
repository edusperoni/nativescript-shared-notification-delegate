import { SharedNotificationDelegateCommon } from './shared-notification-delegate.common';
export interface DelegateObserver {
    userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler?(center: any /* UNUserNotificationCenter */, response: any /* UNNotificationResponse */, completionHandler: () => void, next: () => void): void;
    userNotificationCenterOpenSettingsForNotification?(center: any /* UNUserNotificationCenter */, notification: any /* UNNotification */, stop: () => void, next: () => void): void;
    userNotificationCenterWillPresentNotificationWithCompletionHandler?(center: any /* UNUserNotificationCenter */, notification: any /* UNNotification */, completionHandler: (p1: any /* UNNotificationPresentationOptions */) => void, next: () => void): void;
}
export declare class SharedNotificationDelegateImpl extends SharedNotificationDelegateCommon {
    _observers: Array<{
        observer: DelegateObserver;
        priority: number;
    }>;
    private delegate;
    constructor();
    static isUNUserNotificationCenterAvailable(): boolean;
    addObserver(observer: DelegateObserver, priority?: number): void;
    removeObserver(observer: DelegateObserver): void;
}
export declare const SharedNotificationDelegate: SharedNotificationDelegateImpl;
