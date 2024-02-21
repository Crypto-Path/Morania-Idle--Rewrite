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

    if (dropTarget) {
        draggedItem.classList.remove("dragging");
        if (dropTarget != draggedItem) {
            if (ev.clientY < dropTarget.getBoundingClientRect().top + dropTarget.offsetHeight / 2) {
                dropTarget.parentNode.insertBefore(draggedItem, dropTarget);
            } else {
                dropTarget.parentNode.insertBefore(draggedItem, dropTarget.nextSibling);
            }
        }
    }
}

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



// Function to handle context menu event and prevent default behavior
function handleContextMenu(event) {
    event.preventDefault(); // Prevent default right-click context menu
}

// Add event listener for context menu event
document.addEventListener("contextmenu", handleContextMenu);