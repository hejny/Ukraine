export interface IUkraineOptions {
    /**
     * In which element should the flag + text + blood be inserted.
     * Note: If not specified, a new element will be created and appended to the body.
     */
    element: HTMLElement;

    /**
     * List of banned countries by ISO 3166
     */
    countries: string[];

    /**
     * What text to show
     * Note: It is possible to use HTML tags - do not pass here user input
     */
    text: string;

    /**
     * Link to more information about this war
     * Note: Using type string (not URL class) to keep maximal compatibility
     */
    moreInfoUrl: string;

    /**
     * If set, ribbon with Ukraine flag leading to `moreInfoUrl` will be shown in corner of the page for all users
     */
    ribbon: null | 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT';

    /**
     * If true, information will be shown also in dev console
     */
    isInConsole: boolean;

    /**
     * If true, image of the blood will be shown.
     */
    isBloodIncluded: boolean;

    /**
     * If true, images from war will be shown.
     * If string, image with given URL will be shown
     */
    isGraphicIncluded: boolean | string;

    /**
     * If true, there will be option to proceed to website
     * This will change HARD ban to SOFT ban
     */
    isCancelable: boolean;
}

export const defaultOptions: Omit<IUkraineOptions, 'element'> = {
    /**
     * TODO: Add more countries like chechnya
     */
    countries: [/* Russia and Belarus */ 'ru', 'by'],

    text: `Остановить войну с <b>Украиной</b>`,

    /**
     * TODO: Probbably better default URL
     */
    moreInfoUrl: `https://github.com/hejny/Ukraine`,
    ribbon: 'TOP_LEFT',
    isInConsole: true,
    isBloodIncluded: true,
    isGraphicIncluded: true,
    isCancelable: false,
};
