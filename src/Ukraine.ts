import { BLOOD_IMAGE_URL, UKRAINE_FLAG_IMAGE_URL } from './assets';
import { getUserLanguage } from './getUserLanguage';
import { defaultOptions, IUkraineOptions } from './options';
import { randomItem } from './randomItem';

export class Ukraine {
    public static async save(
        options?: Partial<IUkraineOptions>,
    ): Promise<Ukraine> {
        options = options || {};

        if (options.element === undefined) {
            await new Promise<void>((resolve) => {
                window.addEventListener('load', (event) => {
                    resolve();
                });
            });

            options.element = window.document.createElement('div');
            window.document.body.appendChild(options.element);
        }

        return new Ukraine({
            element: options.element,
            ...defaultOptions,
            ...options,
        });
    }

    private readonly scope = 'x' + Math.random().toString().split('.')[1] + '_';

    public constructor(public readonly options: IUkraineOptions) {
        // TODO: Split into multiple methods like checkRequirements and init

        let isBlocking: boolean;
        if (this.options.countries.includes(getUserLanguage())) {
            isBlocking = this.initBlocking();
        } else {
            isBlocking = false;
        }

        if (options.ribbon && !isBlocking) {
            this.initRibbon();
        }
    }

    private rerenderConsole() {
        try {
            const message = (
                document.querySelector(`.${this.scope}text`) as HTMLElement
            ).innerText;

            console.clear();
            console.info(
                `%c ${message}`,
                `background: #005BBB; color: #FFD500; font-size: 50px;`,
            );

            console.info(this.options.moreInfoUrl);
        } catch (error) {
            console.error(error);
        }
    }

    private initConsole() {
        this.rerenderConsole();

        for (const timeout of [1, 10, 100, 1000, 10000, 50000]) {
            setTimeout(() => {
                this.rerenderConsole();
            }, timeout);
        }
    }

    private initBlocking(): boolean {
        if (this.options.isCancelable) {
            if (localStorage.getItem('Ukraine-read')) {
                return false;
            }
        }

        // Note: To suppress main scrollbar if the page has longer content
        window.document.body.style.setProperty(
            'overflow',
            'hidden',
            'important',
        );

        this.options.element.style.zIndex = '999999';
        this.options.element.style.position = 'fixed';
        this.options.element.style.top = '0';
        this.options.element.style.bottom = '0';
        this.options.element.style.left = '0';
        this.options.element.style.right = '0';
        this.options.element.style.backgroundColor = '#ffffff';
        this.options.element.innerHTML = /* TODO: Use spaceTrim */ `
        <div>
          ${
              !this.options.isBloodIncluded
                  ? ''
                  : `<img class="${this.scope}blood" src="${BLOOD_IMAGE_URL}" alt="Blood"/>`
          }

          ${
              !this.options.isCancelable
                  ? ''
                  : `<button class="${this.scope}cancel">✖</button>`
          }

          <div class="${this.scope}flag">

            ${
                !this.options.isGraphicIncluded
                    ? ''
                    : `<div class="${this.scope}graphic"><div class="inner"></div></div>`
            }

            <a class="${this.scope}text" href="${this.options.moreInfoUrl}">
              ${this.options.text}
            </a>
          </div>

          <style>
            img.${this.scope}blood{
              z-index: 2147483647;
              position: fixed;
              pointer-events: none;
              left: 10vw;
              top: 10vh;
              max-width: 30vw;
            }

            button.${this.scope}cancel{
              display: block;
              position: fixed;
              top: 0;
              right: 0;
              cursor: pointer;
              font-size: 35px;
              color: #FFD500;
              background-color: #005BBB;
              border: none;
              outline: none;
            }

            button.${this.scope}cancel:hover{
              color: #ffffff;
            }


            .${this.scope}flag {
              background-image: url("${UKRAINE_FLAG_IMAGE_URL}");
              background-size: cover;
              width:100vw;
              height:100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .${this.scope}graphic {
              position: absolute;
              opacity: 0.5;
              pointer-events: none;
            }
            .${this.scope}graphic .inner {
              position: relative;
              background-image: url("${this.getGraphicUrl()}");
              background-size: cover;
              opacity: 0.5;
              pointer-events: none;
              width:100vw;
              height:100vh;
            }

            .${this.scope}text {
              padding: 10px;
              font-size: 50px;
              color: #FFD500;
              background-color: #005BBB;
              border: 3px double #FFD500;
            }

            .${this.scope}text b{
              display: block;
              font-size: 100px;
            }


          </style>

        </div>
      `;

        if (this.options.isCancelable) {
            this.options.element
                .querySelector(`.${this.scope}cancel`)!
                .addEventListener('click', () => {
                    this.options.element.remove();
                    localStorage.setItem('Ukraine-read', 'true');
                    location.reload();
                });
        }

        if (this.options.isInConsole) {
            this.initConsole();
        }

        return true;
    }

    private static RIBBON_CSSS = {
        TOP_LEFT: {
            container: 'top: 0; left: 0;transform: translateX(-45%);',
            rotate: '-45deg',
        },
        TOP_RIGHT: {
            container: 'top: 0; right: 0;transform: translateX(45%);',
            rotate: '45deg',
        },
        BOTTOM_LEFT: {
            container: 'bottom: 0; left: 0;transform: translateX(-45%);',
            rotate: '45deg',
        },
        BOTTOM_RIGHT: {
            container: 'bottom: 0; right: 0;transform: translateX(45%);',
            rotate: '-45deg',
        },
    };

    private initRibbon() {
        let ribbonCss = Ukraine.RIBBON_CSSS[this.options.ribbon!];

        if (!ribbonCss) {
            ribbonCss = Ukraine.RIBBON_CSSS[defaultOptions.ribbon!];
        }

        const { container, rotate } = ribbonCss;

        this.options.element.innerHTML = /* TODO: Use spaceTrim */ `

        <div class="${this.scope}container">
          <a class="${this.scope}ribbon" href="${
            this.options.moreInfoUrl
        }" target="_blank" rel="noopener noreferrer"></a>
        </div>

        <style>

          .${this.scope}container {

            position: fixed;
            ${container}

            z-index: 2147483647;

          }

          .${this.scope}ribbon {
            display: block;
            width: 100vw;
            height: 3vw;
            transform: rotate(${rotate});


            background-image: url("${UKRAINE_FLAG_IMAGE_URL}");
            background-size: auto;


            ${
                !this.options.hasShadow
                    ? ''
                    : `box-shadow: 0 0 8px rgba(0,0,0,0.5);`
            }
          }

        </style>


    `;
    }

    private getGraphicUrl(): string {
        if (typeof this.options.isGraphicIncluded === 'string') {
            return this.options.isGraphicIncluded;
        } else {
            return randomItem(
                `https://raw.githubusercontent.com/hejny/Ukraine/main/assets/graphic/war1.jpg`,
                // TODO: More images @see https://facebook.com/story.php?story_fbid=10221678909548124&id=1416254989&m_entstream_source=timeline
            );
        }
    }
}
