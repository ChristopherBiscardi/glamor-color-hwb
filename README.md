# glamor-calc-reduction

A port of
[postcss-color-hwb](https://github.com/postcss/postcss-color-hwb)
for glamor, using
[color](https://www.npmjs.com/package/color).

Transform glamor declarations with `calc()`:

```javascript
css({
  color: "hwb(90, 0%, 0%, 0.5)",
  background: "linear-gradient(hwb(190, 50%, 0%), hwb(190, 50%, 10%, .2))",
  ":hover": { backgroundColor: "red" }
})
```

into

```css
.css-1imi224,[data-css-1imi224]{
  color:rgba(128, 255, 0, 0.5);
  background:linear-gradient(rgb(128, 234, 255), rgba(128, 213, 230, 0.2));
}

.css-1imi224:hover,[data-css-1imi224]:hover{
  background-color:red;
}
```

# Usage

```javascript
import hwb from 'glamor-color-hwb;
import { plugins } from 'glamor';
plugins.add(hwb);
```

## ECMAScript

You will need polyfills for the following features (which are provided
for you if you are using babel's runtime).

* Object.entries
* String.includes

A non-compiled version can be required at `index.es.js` and is
specified as `jsnext:main`. This version includes the following
language features in addition:

* Destructuring
* Object literal shorthand
* Fat Arrows
* Template Strings
