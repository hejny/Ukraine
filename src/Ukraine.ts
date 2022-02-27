import { BLOOD_IMAGE_URL, UKRAINE_FLAG_IMAGE_URL } from './assets';
import { getUserLanguage } from './getUserLanguage';
import { IUkraineOptions } from './options';

export class Ukraine {
    public static create(options?: Partial<IUkraineOptions>) {
        options = options || {};

        if (options.element === undefined) {
            options.element = window.document.createElement('div');
            window.document.body.appendChild(options.element);
        }

        return new Ukraine({
            element: options.element,
            languages: [/* Russia and Belarus */ 'ru', 'by'],
            isBloodIncluded: true,
            text: `Остановить войну с <b>Украиной</b>`,
            ...options,
        });
    }

    private readonly scope = 'x' + Math.random().toString().split('.')[1] + '_';

    public constructor(public readonly options: IUkraineOptions) {
        // TODO: Split into multiple methods like checkRequirements and init

        if (!this.options.languages.includes(getUserLanguage())) {
            return;
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
          <div class="${this.scope}flag">
            <div class="${this.scope}text">
              ${this.options.text}
            </div>
          </div>

          <style>
            img.${this.scope}blood{
              position: fixed;
              pointer-events: none;
              left: 10vw;
              top: 10vh;
              max-width: 30vw;
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

        // TODO: !!! Also ocupy console and mess up whole dom
        // TODO: Play anthemn
    }
}
