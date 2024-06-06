// Infinite Chef Mod: Additional Items

// Define new items
const newItems = [
    { name: "Red Banana", type: "Fruit", image: "images/red_banana.png" },
    { name: "Fries", type: "Side", image: "images/fries.png" },
    { name: "Fried Rice", type: "Main", image: "images/fried_rice.png" },
    { name: "Catfish", type: "Main", image: "images/catfish.png" },
    { name: "Croissant", type: "Pastry", image: "images/croissant.png" }
];

// Function to add items to the game
function addItemsToGame(items) {
    items.forEach(item => {
        game.addItem({
            name: item.name,
            type: item.type,
            image: item.image
        });
    });
}

// Add the new items to the game
addItemsToGame(newItems);

console.log("Additional items mod loaded successfully!");
