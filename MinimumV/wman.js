//written for Simple OS 6.. Licenced product


  function isDivVisible(divElement) {
    return divElement && divElement.offsetParent !== null;
  }

  function writeToChangeJS(content) {
    const changeJsDiv = document.getElementById('changejs');
    changeJsDiv.textContent = content;
  }

  function checkDivVisibility() {
    const fileDiv = document.getElementById('files');
    const sysDiv = document.getElementById('settings');
    const editDiv = document.getElementById('brz');

    if (isDivVisible(fileDiv)) {
      writeToChangeJS('Files');
      document.getElementsByClassName("task-icon-file").style.border = "2px solid #950fbe63"
    }
    if (isDivVisible(sysDiv)) {
      writeToChangeJS('Settings');
    }
    if (isDivVisible(editDiv)) {
      writeToChangeJS('brz');
    }
  }

  function handleDoubleClick(event) {
    const targetDiv = event.currentTarget;

    // Toggle the "double-clicked" class when the div is double-clicked
    targetDiv.classList.toggle('double-clicked');

    // If the div is double-clicked and its width is set to 100%, reset its style
    if (targetDiv.classList.contains('double-clicked') && targetDiv.style.width === '100%') {
      targetDiv.style.width = '';
      targetDiv.style.height = '';
    }
  }

  const divs = document.querySelectorAll('.draggable');

  divs.forEach((div) => {
    div.addEventListener('dblclick', handleDoubleClick);
  });

  // Check for visibility initially and set an interval to check for visibility changes
  checkDivVisibility();
  setInterval(checkDivVisibility, 100);
 
q = document.getElementById("theFrames")

  if (q.style.width > '800px') {
    q.style.border_radius == '0px';
    q.style.height = "100%";
  }
  else if (q.style.height > '410px')  {
    q.style.height = '100%'
  }

function isXClicked() { // for closing files, look at the "x" element or closing element in the topbar
  if (document.getElementById('changejs').innerText == "Files") { 
    $('#files').hide();
    document.getElementById('changejs').innerText = 'DEV prev 6.971.55 Pro-DE';
  }
  if (document.getElementById('changejs').innerText == "Settings") {
    $('#settings').hide();
    document.getElementById('changejs').innerText = 'DEV prev 6.971.55 Pro-DE';
  }
}

isXClicked();
setInterval(isXClicked, 100);

document.addEventListener('keyup', function(event) {
  if (!event.ctrlKey) {
    console.log('Ctrl key is released.');
    // Perform your actions here when Ctrl key is released.
    $('.start').show();
  }
});

