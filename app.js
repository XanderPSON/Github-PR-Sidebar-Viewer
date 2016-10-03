$document.ready(){
  var refs = document.getElementsByClassName('discussion-item-ref');
  var pullRequests = getPullRequests(refs);
  var completedDiv = buildDiv(pullRequests);

  var child = document.createElement('div');
  child.innerHTML = completedDiv;
  
  var sidebar = document.getElementById('partial-discussion-sidebar');
  sidebar.insertBefore(child, sidebar.firstChild);
}

function getPullRequests(refs) {
  var titles = [];
  var states = [];

  for (var i = 0; i < refs.length; i++) {
    var refTitles = refs[i].getElementsByClassName('discussion-item-ref-title');
    var refStates = refs[i].getElementsByClassName('state');

    for (var j = 0; j < refTitles.length; j++) {
      titles.push(refs[i].getElementsByClassName('discussion-item-ref-title')[0].outerHTML) 
    }

    for (var k = 0; k < refTitles.length; k++) {
      states.push(refs[i].getElementsByClassName('state')[0].outerHTML)
    }
  }

  return [titles, states];
}

function buildDiv(pullRequests) {
  var myDiv = buildFirstHalf();
  for (var i = 0; i < pullRequests[0].length; i++){
    myDiv += pullRequests[0][i];
    myDiv += pullRequests[1][i];
  }
  myDiv += '</div></div></div>';

  return myDiv;
}

function buildFirstHalf() {
  var myDiv = ''
  myDiv += '<div class="discussion-sidebar-item sidebar-pull-requests js-discussion-sidebar-item">'
  myDiv += '<div class="select-menu js-menu-container js-select-menu" data-contents-url="">'
  myDiv += '<button type="button" class="discussion-sidebar-heading discussion-sidebar-toggle js-menu-target" aria-label="View pull requests" aria-haspopup="true" data-hotkey="m" aria-expanded="false">'
  myDiv += 'Pull Requests'
  myDiv += '</button>'
  myDiv += '<div class="pull-requests css-truncate">'
  return myDiv;
}

function buildSecondHalf(myDiv) {

  return myDiv;
}

  myDiv += '<a title="Pull requests" href="/Roostify/team-platform/milestone/20" class="milestone-name css-truncate">'
  myDiv += '<span class="css-truncate-target">Pull requestsasdsadas</span>'
  myDiv += '</a>'