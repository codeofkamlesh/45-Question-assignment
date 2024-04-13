function sandwitch (...items: string[]){  // this is called as rest parameter

    console.log("Items included in this sandwitch are:");
    items.forEach(all_items => console.log("-" + all_items));
    console.log("Enjoy your Sandwitch\n");
        
}
sandwitch("potatoes", "ketchup", "salad");

sandwitch("chicken", "cheese", "Egg");

sandwitch("bread", "butter", "Mayonees");