export interface IUkraineOptions {
    /**
     * In which element should the flag + text + blood be inserted.
     * Note: If not specified, a new element will be created and appended to the body.
     */
    element: HTMLElement;
    /**
     * List of banned countries by ISO 3166
     */
    languages: string[];
    /**
     * What text to show
     * Note: It is possible to use HTML tags - do not pass here user input
     */
    text: string;
    /**
     * If true, image of the blood will be shown.
     */
    isBloodIncluded: boolean;
}
