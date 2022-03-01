import { IUkraineOptions } from './options';
export declare class Ukraine {
    readonly options: IUkraineOptions;
    static save(options?: Partial<IUkraineOptions>): Promise<Ukraine>;
    private readonly scope;
    constructor(options: IUkraineOptions);
    private initBlocking;
    private initRibbon;
}
