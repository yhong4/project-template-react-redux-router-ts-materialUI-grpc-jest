import { Record } from 'immutable';

export const Model = <T>(data:T) => {
    return Record(data);
}