# ReactShoppingTemplate
![](https://img.shields.io/github/issues/NikiTricky2/ReactShoppingTemplate) ![](https://img.shields.io/github/workflow/status/NikiTricky2/ReactShoppingTemplate/ReactShoppingTemplate) ![](https://img.shields.io/github/last-commit/NikiTricky2/ReactShoppingTemplate) ![](https://img.shields.io/uptimerobot/status/m788262689-23b1d0b5e71de971fd2ab87f?label=website%20status)  
A React shopping template  
[See on Replit](https://replit.com/@NikiTricky2/ReactShoppingTemplate)  

## How to configure
Here are the meaning to some files that you can change:  
* [/src/css/bootstrap.min.css](https://github.com/NikiTricky2/ReactShoppingTemplate/blob/main/src/css/bootstrap.min.css) - The custom Boostrap CSS. You can make your own theme here: https://bootstrap.build/
* [/src/producs.js](https://github.com/NikiTricky2/ReactShoppingTemplate/blob/main/src/producs.js) - The products. They are on a list with this format:
  ```js
  new Product(name, desc, fullDesc, price, image)
  ```
  Here is what every argument is:
  * `name` - The name of the product
  * `desc` - The short description of the product - the one witch is shown on the front page
  * `fullDesc` - The full description, witch is shown on the product page
  * `price` - The price
  * `image` - The product image (all product images are stored in [/public/images](https://github.com/NikiTricky2/ReactShoppingTemplate/tree/main/public/images))

* [/src/components/Navbar.jsx](https://github.com/NikiTricky2/ReactShoppingTemplate/blob/main/src/components/Navbar.jsx) - The navbar. You can see examples [here](https://getbootstrap.com/docs/5.0/components/navbar/)
* [/src/components/Footer.jsx](https://github.com/NikiTricky2/ReactShoppingTemplate/blob/main/src/components/Footer.jsx) - The footer.
* [/src/components/Main.jsx](https://github.com/NikiTricky2/ReactShoppingTemplate/blob/main/src/components/Main.jsx) - Here are all the pages you can add new ones here

## See it in Action
https://reactshoppingtemplate.nikitricky2.repl.co/
