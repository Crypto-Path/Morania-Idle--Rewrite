// TOOLTIPS
let items = document.querySelectorAll('.item');
let deitem = undefined;

items.forEach(item => {
    item.addEventListener('mouseenter', function(event) {
        if (!((item.children[0].children[0].src == "") || (item.children[0].children[0].src == "file:///C:/Users/cyphe/Documents/GitHub/ITRM-Rewrite/index.html"))) {
            const tooltip = document.getElementById('tooltip');
            tooltip.textContent = item.dataset.tooltip;
            tooltip.style.display = 'block';
            tooltip.style.top = `${event.clientY + 10}px`;
            tooltip.style.left = `${event.clientX + 10}px`;
            deitem = item
            setToolTipText() 
        }
    });

    item.addEventListener('mouseleave', function() {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    });
});

document.addEventListener("mousemove", (event) => {
    tooltip.style.top = `${event.clientY + 10}px`;
    tooltip.style.left = `${event.clientX + 10}px`;
});

function setToolTipText() {
    const _item = game.inventory.inventory[deitem.children[0].children[0].id][0];
    const _count = game.inventory.inventory[deitem.children[0].children[0].id][1];

    console.log();

    const attributes = JSON.parse(_item.attributes);
    let traits = attributes.Traits.join(", ")
    let scrapText = ""
    let damageText = ""
    if (attributes.scrap) {
        scrapText = attributes.scrap.map(([item, count]) => `${item} (x${count})`).join("\n");
    }
    if (attributes.Damage) {
        damageText = "\n\nDamage: " + attributes.Damage;
    }
    if (attributes.DCM) {
        damageText += "\nDrop Chance Multi: +" + attributes.DCM + "%";
    }
    if (attributes.XPM) {
        damageText += "\nXP Multi: +" + attributes.XPM + "%";
    }
    
    document.getElementById('tooltip').innerText = `${_item.name} (x${_count})\n[${traits}]${damageText}\n\n${_item.description}${(scrapText != "") ? `\n\n[Scrap] (LMB)\n\n${scrapText}` : ""}`
}