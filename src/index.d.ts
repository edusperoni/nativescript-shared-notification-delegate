import { SharedNotificationDelegateCommon } from './shared-notification-delegate.common';
export interface DelegateObserver {
    userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler?(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void, stop: () => void, next: () => void): void;
    userNotificationCenterOpenSettingsForNotification?(center: UNUserNotificationCenter, notification: UNNotification, stop: () => void, next: () => void): void;
    userNotificationCenterWillPresentNotificationWithCompletionHandler?(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void, stop: () => void, next: () => void): void;
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
