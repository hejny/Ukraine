import { IUkraineOptions } from './options';
export declare class Ukraine {
    readonly options: IUkraineOptions;
    static save(options?: Partial<IUkraineOptions>): Ukraine;
    private readonly scope;
    constructor(options: IUkraineOptions);
}
