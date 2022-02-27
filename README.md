# 🟦 Stop war on Ukraine 🟨

As a libertarian and programmer, I would never think that I would someday work on a piece of software that would go against free access to any service from any corner of the world.

But unfortunately, the situation has changed.

Ukraine was attacked by Russia and a lot of innocent children, women and men are now dying in Kyiv and other Ukrainian cities at the hands of one cruel dictator.

**This can not be tolerated in 21. century in Europe.**

We can not just close our eyes and just provide all services and benefits to the Russian economy which can keep killing innocent people.

**If you are managing some website, please stop it for Russia** until the war will be over and putin overthrown.

---

I have created a simple way how to do it.

For the users **from other places, nothing happens**. The script is tiny to load and insignificant. If the visitor is from **Russia or Belarus** _(detected by system language)_ this **message will appear**:

<!--Badges-->
<!--⚠️WARNING: This section was generated by https://github.com/hejny/batch-project-editor/blob/main/src/workflows/800-badges/badges.ts so every manual change will be overwritten.-->
<!--
[![License of ✂️ Space trim](https://img.shields.io/github/license/hejny/Ukraine.svg?style=flat)](https://github.com/hejny/Ukraine/blob/main/LICENSE)
[![NPM Version of ✂️ Space trim](https://badge.fury.io/js/Ukraine.svg)](https://www.npmjs.com/package/Ukraine)
[![Quality of package ✂️ Space trim](https://packagequality.com/shield/Ukraine.svg)](https://packagequality.com/#?package=Ukraine)
[![lint](https://github.com/hejny/Ukraine/actions/workflows/lint.yml/badge.svg)](https://github.com/hejny/Ukraine/actions/workflows/lint.yml)
[![test](https://github.com/hejny/Ukraine/actions/workflows/test.yml/badge.svg)](https://github.com/hejny/Ukraine/actions/workflows/test.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/hejny/Ukraine/badge.svg)](https://snyk.io/test/github/hejny/Ukraine)
[![Issues](https://img.shields.io/github/issues/hejny/Ukraine.svg?style=flat)](https://github.com/hejny/Ukraine/issues)
-->
<!--/Badges-->

![Blood on Ukraine](./assets/wallpaper.png)

## 📲 How to include on your page?

There are several ways how to add this to your page:

### 📔 Via HTML script tag

<!-- TODO: Auto update of version v0.9.0 -->

```html
<script src="https://raw.githubusercontent.com/hejny/Ukraine/v0.9.0/dist/umd/main.js"></script>
<script>
    Ukraine.save();
</script>
```

_Note:_ You can [also modify the options](https://github.com/hejny/Ukraine/blob/main/samples/browser.html#L10).
_Note: Normally you would include **async** and **defer** keywords in the script element. But in this situation we do not want to defer this miniscript._

### 📘 Import into the bundle

```bash
npm i save-ukraine
```

```typescript
import Ukraine from 'save-ukraine';

Ukraine.save();
```

_Note: This library is written in TypeScript so [options](./src/options.ts) are fully typed._

<!--
### 📗 Wordpress, ...
Feel free to add more methods of importing
-->

## 🛑 How not to use?

There are some ways to beware of

### 👨🏽‍💻 Security

When you import anything _(not only this script)_ on your page, please do not trust the publisher. Verify the code and **include only the specific version** not the wildcard of every future version.

<!--

TODO:

### 👽 Import via

Do not use - caniuse for Russia
<script type="module">
    import Ukraine from '../dist/esm/Ukraine.js';

    console.log(
        Ukraine.default(`

          ✂️ Ukraine as ES module ✂️

    `),
    );
</script>

-->

## 🛠 Customization

You can customize what will be shown.
Here are all the [options](./src/options.ts). If you have some idea feel free to contribute via pull request.

```javascript
Ukraine.save({
    text: 'Stop the war with <b>Ukraine</b>',
    languages: [/* Russia and Belarus */ 'ru', 'by'],
    isBloodIncluded: true,
});
```
