import { IUkraineOptions } from './options';
import { Ukraine } from './Ukraine';
export { getUserLanguage } from './getUserLanguage';
export { defaultOptions, IUkraineOptions } from './options';

export default Ukraine;

export function save(options?: Partial<IUkraineOptions>): Promise<Ukraine> {
    return Ukraine.save(options);
}
