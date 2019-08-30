# NavBarJsPlugin

This is a nav bar js plugin, that helps you with the tricky part of nested
navigation while you need it working by click instead of by hover.

## Usage

> This plugin only adds the class '.active' to your submenu item, so you need to code all the css by your own. If you want, you can also copy the css showed in the example.

You need to select the item where you need the plugin to work and initialize it with the submenu method.
Submenu method accepts the next options as parameter:
 * submenu: Accepts css selector which says the submenu's css name, the default value is '.submenu'
 * displayer: Accepts css selector which says the submenu's activator css name, the default value is '.submenuDisplayer'
 * nested: As it can work perfectly as a nested navigation bar, you can also use it as a simple navigation displayer, with only one                layer, the default value is 'false'
If you have a nested navigation bar, you need to add the data-layer to your navigations items, telling how deep is the item.

> **Important: the submenu and submenu displayer must be at the same depth level in the html.**

### Usage Example

**In the HTML**
```html
<nav class="nav">
  <ul>
    <li data-layer='1'>
      <span class="submenuDisplayer">
        Layer 1 >
      </span>
      <div class="submenu">
        <ul>
          <li data-layer='2'>
            Layer 2
          </li>
          <li data-layer='2'>
           Layer 2
          </li>
          <li data-layer='2'>
            Layer 2
          </li>
        </ul>
      </div>
    </li>
  </ul>
</nav>
<script src='submenu.js'></script>
```
**In the javascript**
```js
  document.querySelector('.nav').submenu({
    nested:true
  });
```

### Live Example

[Watch in CodePen](https://codepen.io/maneroto/pen/eYOEOpQ)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
