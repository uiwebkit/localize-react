# Uni Localization example for React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

Check out demo [here](https://uiwebkit.github.io/localize-react/)

Check out our docs [here](https://uiwebkit.com/wgt/loc/2)

### Add to index.html

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/flag@0.1.1/dist/flag/flag.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/udk@2.0.0-13/dist/udk.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/mat@2.0.0-2/dist/mat.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/loc@2.0.0-6/dist/loc/loc.esm.js"></script>
```

#### Place Uni Language Menu into the header of your web app. Specify the path to the language list JSON file (ex. lang-menu.json) or backend API endpoint

```html
<uni-router shadow></uni-router>
<uni-lang-menu-shadow mini round routing url="lang-menu.json"></uni-lang-menu-shadow>
```

#### Wrap your content with Uni Translate globally (for more convenience)

```html
<uni-translate><ContentComponent/></uni-translate>
```

#### or wrap your text content with Uni Translate locally (for better performance)

```html
<uni-translate>localized content</uni-translate>
```

#### localize partially

```html
<uni-translate>text and (( partially localized ))</uni-translate>
```

#### localize attributes

```html
<uni-translate>
  <a href="https://your_domain/(( localized ))">link</a>
</uni-translate>
```

#### open and modify ./public/lang-menu.json and translation files into ./public/i18n/ folder
