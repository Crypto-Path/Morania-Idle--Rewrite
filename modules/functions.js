function getImageURL(spriteName) {
    return `Images/${spriteName}.png`
}


// DRAGGING
let draggedItem = null;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    draggedItem = ev.target;
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.classList.add("dragging");
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dropTarget = ev.target;

    while (dropTarget && !dropTarget.classList.contains("item")) {
        dropTarget = dropTarget.parentNode;
    }

    draggedItem.classList.remove("dragging");
    if (dropTarget) {
        if (dropTarget != draggedItem) {
            if (ev.clientY < dropTarget.getBoundingClientRect().top + dropTarget.offsetHeight / 2) {
                dropTarget.parentNode.insertBefore(draggedItem, dropTarget);
            } else {
                dropTarget.parentNode.insertBefore(draggedItem, dropTarget.nextSibling);
            }
        }
    }
}
          
document.addEventListener("dragend", () => {
        document.getElementsByClassName('dragging')[0].classList.remove("dragging");
})

function PlayAudio(audio, timeout, time = 0) {
    
    if (!audio.paused) {
        audio.pause;
    }
    audio.currentTime = time;
    audio.play();

    if (timeout > 0) {
        setTimeout(() => {
            audio.pause();
        }, timeout)
    }
}

function balanceProgresses(progresses) {
    let totalRatio = 0;
    let totalProgress = 0;

    for (const progress of progresses) {
        const ratio = progress[0] / progress[1];
        totalProgress += ratio * 100;
        totalRatio += ratio;
    }

    const averageProgress = totalProgress / progresses.length;
    const balancedRatio = Math.min(1, averageProgress / 100);

    const balancedProgress = progresses.map(progress => {
        const balancedValue = Math.min(progress[1], balancedRatio * progress[1]);
        return [balancedValue, progress[1]];
    });

    return balancedProgress;
}


function handleContextMenu(event) {
    event.preventDefault();
}

document.addEventListener("contextmenu", handleContextMenu);

function addToolTipListener(element, item_, count) {
    element.addEventListener('mouseenter', function(event) {
        if (!((element.children[0].children[0].src == "") || (element.children[0].children[0].src.includes("index")) || count == undefined)) {
            const tooltip = document.getElementById('tooltip');
            //tooltip.textContent = container.dataset.tooltip;
            tooltip.style.display = 'block';
            tooltip.style.top = `${event.clientY + 10}px`;
            tooltip.style.left = `${event.clientX + 10}px`;

            const _item = (!isNaN(item_)) ? game.inventory.inventory[item_][0] : item_;
            const _count = (!isNaN(item_)) ? game.inventory.inventory[item_][1] : count;

            const attributes = JSON.parse(_item.attributes);
            const title = document.getElementById('tooltipTitle');
            const desc = document.getElementById('tooltipDescription');
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
            
            title.innerText = `${_item.name} ${(_count == 1) ? "" : "(x" + _count + ")"}`;
            
            desc.innerText = `[${traits}]${damageText}\n\n${_item.description}${(scrapText != "") ? `\n\n[Scrap] (LMB)\n\n${scrapText}` : ""}`
        }
    });
}

function fadeScreen() {
    var overlay = document.getElementById('overlay');
    overlay.style.opacity = '1'; // Fade in the overlay
    overlay.style.pointerEvents = 'auto'; // Enable clicks
}

function unfadeScreen() {
    var overlay = document.getElementById('overlay');
    overlay.style.opacity = '0'; // Fade out the overlay
    overlay.style.pointerEvents = 'none'; // Disable clicks
}

function openTab(unlock, lock) {
    document.getElementById(unlock).classList.remove("Locked");
    document.getElementById(lock).classList.add("Locked");
}