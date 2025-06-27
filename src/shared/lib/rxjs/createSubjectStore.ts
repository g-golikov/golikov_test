import { BehaviorSubject } from 'rxjs';

export function createSubjectStore<T>(initialValue: T) {
    const subject$ = new BehaviorSubject<T>(initialValue);

    return {
        subject$,
        get: () => subject$.getValue(),
        set: (value: T) => subject$.next(value),
        subscribe: subject$.subscribe.bind(subject$),
    };
}
