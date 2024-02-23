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