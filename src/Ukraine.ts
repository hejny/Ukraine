import { BLOOD_IMAGE_URL, UKRAINE_FLAG_IMAGE_URL } from './assets';
import { getUserLanguage } from './getUserLanguage';
import { defaultOptions, IUkraineOptions } from './options';

export class Ukraine {
    public static async save(options?: Partial<IUkraineOptions>) {
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

        if (this.options.countries.includes(getUserLanguage())) {
            this.initBlocking();
            if (this.options.isInConsole) {
                this.initConsole();
            }
        } else if (options.ribbon) {
            this.initRibbon();
        }
    }

    private rerenderConsole() {
        console.clear();

        const message = (
            document.querySelector(`.${this.scope}text`) as HTMLElement
        ).innerText;
        console.info(
            `%c ${message}`,
            `background: #005BBB; color: #FFD500; font-size: 50px;`,
        );

        console.info(this.options.moreInfoUrl);
    }

    private initConsole() {
        this.rerenderConsole();

        for (const timeout of [1, 10, 100, 1000, 10000, 50000]) {
            setTimeout(() => {
                this.rerenderConsole();
            }, timeout);
        }
    }

    private initBlocking() {
        if (this.options.isCancelable) {
            if (localStorage.getItem('Ukraine-read')) {
                return;
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
              z-index: 9999999;
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
              background-image: url("https://raw.githubusercontent.com/hejny/Ukraine/main/assets/war/war1.jpg");
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
    }

    private initRibbon() {
        const { container, rotate } = {
            TOP_LEFT: {
                container: 'top: 0; left: 0;transform: translateX(-32px);',
                rotate: '-45deg',
            },
            TOP_RIGHT: {
                container: 'top: 0; right: 0;transform: translateX(32px);',
                rotate: '45deg',
            },
            BOTTOM_LEFT: {
                container: 'bottom: 0; left: 0;transform: translateX(-32px);',
                rotate: '45deg',
            },
            BOTTOM_RIGHT: {
                container: 'bottom: 0; right: 0;transform: translateX(32px);',
                rotate: '-45deg',
            },
        }[this.options.ribbon!];

        this.options.element.innerHTML = /* TODO: Use spaceTrim */ `

        <div class="${this.scope}container">
          <a class="${this.scope}ribbon" href="${this.options.moreInfoUrl}" target="_blank" rel="noopener noreferrer"></a>
        </div>

        <style>

          .${this.scope}container {

            position: fixed;
            ${container}

          }

          .${this.scope}ribbon {
            display: block;
            width: 10vw;
            height: 0px;
            transform: rotate(${rotate});
            border-top: 20px solid #0057b7;
            border-bottom: 20px solid #ffd700;
          }

        </style>


    `;
    }
}
