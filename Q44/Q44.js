"use strict";
function sandwitch(...items) {
    console.log("Items included in this sandwitch are:");
    items.forEach(all_items => console.log("-" + all_items));
    console.log("Enjoy your Sandwitch\n");
}
sandwitch("potatoes", "ketchup", "salad");
sandwitch("chicken", "cheese", "Egg");
sandwitch("bread", "butter", "Mayonees");
