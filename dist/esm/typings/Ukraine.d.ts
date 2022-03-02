import { IUkraineOptions } from './options';
export declare class Ukraine {
    readonly options: IUkraineOptions;
    static save(options?: Partial<IUkraineOptions>): Promise<Ukraine>;
    private readonly scope;
    constructor(options: IUkraineOptions);
    private rerenderConsole;
    private initConsole;
    private initBlocking;
    private static RIBBON_CSSS;
    private initRibbon;
    private getGraphicUrl;
}
