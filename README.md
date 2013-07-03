slugy
=====

Slugy - jQuery plugin to populate input fields into an user-and SEO-friendly short text.

Usage
-----

Include jQuery 1.7+ and slugy.js

You must have two inputs in your DOM:

```html
<input type="text" name="yourInput" id="yourInput" />
<input type="text" name="yourInput-slug" id="yourInput-slug" />
```

Then, call like this to use default values

```javascript
$('#yourInput').slugy()
```

or use your own options

```javascript
$('#yourInput').slugy({
	slug_id: yourInput-slug, // the id of the input where the slugegd string is going to be. Default is 'yourInput id + slug'
	on_edit: false, // Activate slugy only if the to-slugify input is empty, to avoid change it if you are editing an object, for example.
	placeholder: true, // Retrive the placeholder of #yourInput and put into #slug_id slugified as the placeholder.
	maxchars: false, // Limit the slug, default as false to no limits.
	common_words: true // Delete commons words. For example: "The Amazing Planet" => amazing-planet
})
```