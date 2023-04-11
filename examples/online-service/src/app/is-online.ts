import { Observable } from 'rxjs';

export function isOnline() {
  return new Observable<boolean>((subscriber) => {
    const handleOnline = () => {
      subscriber.next(true);
    };
    const handleOffline = () => {
      subscriber.next(false);
    };

    subscriber.next(navigator.onLine);

    console.log('subscription');

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  });
}
