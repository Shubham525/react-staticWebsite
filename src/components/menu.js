import React, { Component } from 'react';
class Menu extends Component {
    render() {
        return (
            <div id="food-menu" className="light-wrapper">
        <section className="ss-style-top"></section>
        <div className="container inner">
            <h2 className="section-title text-center">Food Menu</h2>
            <p className="lead main text-center">There is no sincerer love than the love of food!</p>

                        <div className="row">
                <div className="col-sm-3 col-md-3">
                    <div className="menu-images "><img src="img/menu/hot-drinks.png" alt="Hot Drinks" /></div>
                    <div className="menu-titles"><h1 className="">Hot drinks</h1></div>
                    <div className="menu-items ">
                        <ul>
                            <li>Espresso</li>
                            <li>Americano</li>
                            <li>Capuccino</li>
                            <li>Latte</li>
                            <li>Mocha</li>
                            <li>Hot Chocolate</li>
                            <li>Yummie Cafee</li>
                            <li>Fruit Tea</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className="menu-images "><img src="img/menu/ice-drinks.png" alt="Ice Drinks" /></div>
                    <div className="menu-titles"><h1 className="">Ice drinks</h1></div>
                    <div className="menu-items ">
                        <ul>
                            <li>Ice Coffee</li>
                            <li>Americano</li>
                            <li>Latte</li>
                            <li>Vanilla Frappe</li>
                            <li>Espresso Frappe</li>
                            <li>Choco Frappe</li>
                            <li>Iced Chai</li>
                            <li>Fruit Fresh</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className="menu-images "><img src="img/menu/smoothies.png" alt="Smoothies" /></div>
                    <div className="menu-titles"><h1 className="">Smoothies</h1></div>
                    <div className="menu-items ">
                        <ul>
                            <li>Mango</li>
                            <li>Strawberry</li>
                            <li>Blue Berry</li>
                            <li>Peach</li>
                            <li>Pineapple</li>
                            <li>Banana</li>
                            <li>Milkshake</li>
                            <li>Greens</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className="menu-images "><img src="img/menu/deserts.png" alt="Deserts" /></div>
                    <div className="menu-titles"><h1 className="">Deserts</h1></div>
                    <div className="menu-items ">
                        <ul>
                            <li>Cheesecake</li>
                            <li>Choco Pie</li>
                            <li>Pancakes</li>
                            <li>Muffins</li>
                            <li>Fruit Slices</li>
                            <li>Fruit Salad</li>
                            <li>Cream Cake</li>
                            <li>Ice Cream</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-3 col-md-3">
                    <div className="menu-images "><img src="img/menu/cocktails.png" alt="Hot Drinks" /></div>
                    <div className="menu-titles"><h1 className="">Cocktails</h1></div>
                    <div className="menu-items ">
                        <ul>
                            <li>Black Velvet</li>
                            <li>Gin Sour</li>
                            <li>Mojito</li>
                            <li>Long Island</li>
                            <li>Orgasm</li>
                            <li>Bloody Mary</li>
                            <li>Earthquake</li>
                            <li>Whisky Mac</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className="menu-images "><img src="img/menu/beer.png" alt="Ice Drinks" /></div>
                    <div className="menu-titles"><h1 className="">Beer</h1></div>
                    <div className="menu-items ">
                        <ul>
                            <li>Lager</li>
                            <li>Blonde Beer</li>
                            <li>Black Beer</li>
                            <li>Blonde Ale</li>
                            <li>Pilsner</li>
                            <li>Lemon Beer</li>
                            <li>Unfiltered Beer</li>
                            <li>Non-Alcoholic</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className="menu-images "><img src="img/menu/wine.png" alt="Smoothies" /></div>
                    <div className="menu-titles"><h1 className="">Wine</h1></div>
                    <div className="menu-items ">
                        <ul>
                            <li>Sweet Red</li>
                            <li>Dry Red</li>
                            <li>Sweet White</li>
                            <li>Dry White</li>
                            <li>Rose</li>
                            <li>Sparkling Wine</li>
                            <li>Fortified Wine</li>
                            <li>Frutty Red</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className="menu-images "><img src="img/menu/sprites.png" alt="Deserts" /></div>
                    <div className="menu-titles"><h1 className="">Sprites</h1></div>
                    <div className="menu-items ">
                        <ul>
                            <li>Whisky</li>
                            <li>Rum</li>
                            <li>Tequila</li>
                            <li>Gin</li>
                            <li>Champagne</li>
                            <li>Brandy</li>
                            <li>Absinthe</li>
                            <li>Liqueur</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <section className="ss-style-bottom"></section>
    </div>
        );
    }
}

export default Menu;