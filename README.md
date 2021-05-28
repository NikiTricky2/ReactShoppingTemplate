# ReactShoppingTemplate
A React shopping template

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
* [/src/components/Main.jsx](https://github.com/NikiTricky2/ReactShoppingTemplate/blob/main/src/components/Main.jsx) - Here are all the pages you can add new ones here


## Images
### Home
![image](https://user-images.githubusercontent.com/63540250/120007528-af548c80-bfe2-11eb-9567-3b7c73a36144.png)

### Product page
![image](https://user-images.githubusercontent.com/63540250/120007640-cb582e00-bfe2-11eb-9f5d-83ed78a86a7e.png)
