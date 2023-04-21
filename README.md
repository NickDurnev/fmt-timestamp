# Time formatter web component package.

## Usage

Install libraries from npm

```bash
npm i @nick_durnev/fmt-timestamp
```

```bash
npm i lit
```

or add links to CDN

```html
<script type="importmap">
  {
    "imports": {
      "lit": "https://cdn.jsdelivr.net/npm/lit@2.7.0/+esm",
      "fmt-timestamp": "https://unpkg.com/@nick_durnev/fmt-timestamp@1.0.3"
    }
  }
</script>
```

Add <fmt-timestamp> tag in you markup with any ISO 8601 timestamp string. This component will format timestamp on click in 3 forms:

- Relative date (2 days ago);
- Time (15:26);
- Short date (Mar 29), shows year only if passed year isn't current;

```html
<fmt-timestamp>2023-03-29T12:25:07.427Z</fmt-timestamp>
```

You can pass in it 2 attributes - <span style="color:purple">locale</span> and <span style="color:purple">timezone</span> to define time correctly for your region. If you pass uncorrect attributes - componnet will use locale and timezone from your browser.

```html
<fmt-timestamp locale="uk-UA" timezone="Europe/Kiev"
  >2023-03-29T12:25:07.427Z</fmt-timestamp
>
//It will work too
<fmt-timestamp locale="qwe" timezone="111"
  >2023-03-29T12:25:07.427Z</fmt-timestamp
>
```

If you will not pass this attributes - don't worry all will be fine. Web component take them from your browser.

You can use format functions separately from web component.
Just import them in your JS file in this way.

```javascript
{
  formatRelativeTime,
  formatToShort,
  formatToTime,
} from "https://unpkg.com/@nick_durnev/fmt-timestamp@1.0.3/dist/index.js";
```

Examples of usage

```javascript
formatRelativeTime("2023-04-04T18:24:10.427Z", "en-GB");
//will return "10 seconds ago"
formatToShort("2022-04-10T22:32:20.427Z", "en-GB", "Europe/Kiev", 2023);
//will return "11 Apr 22"
formatToTime("2023-03-29T20:25:07.427Z", "en", "America/Los_Angeles");
//will return "1:26 PM"
```

## Styling

You can add styles for component and it's button from external css file.

To style component container just pass styles as usually using <span style="color:purple">fmt-timestamp</span> selector

```css
fmt-timestamp {
  display: block;
  margin: 0 auto;
  padding: 20px;
  background-color: #bb9dcd;
  color: #ece9ee;
  border-radius: 10px;
  font-size: 20px;
  transition: background-color 300ms linear;
  ....;
}
```

## Development

```bash
npm start
```

Run web dev server.

```bash
npm run dev
```

Development mode. Run web server and typescript watching mode.

```bash
npm run test
```

Run tests for functions.

```bash
npm run coverage
```

Run coverage report for tests.

```bash
npm run build
```

Create build in <span style="color:yellow">dist</span> directory based on <span style="color:yellow">vite.config.js</span> file .
