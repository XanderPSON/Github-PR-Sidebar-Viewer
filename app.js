$document.ready(){
  var refs = document.getElementsByClassName('discussion-item-ref');

  var pullRequests = getPRs(refs);
  var completedDiv = buildDiv(pullRequests);

  var sidebar = document.getElementsByClassName('discussion-sidebar');
  sidebar.insertBefore(completedDiv, sidebar.firstChild);
}

function getPRs(refs) {
  // var refTitles = refs.getElementsByClassName('discussion-item-ref-title');
  // var refStates = refs.getElementsByClassName('state');
  var pullRequests = [];

  for (var i = 0; i < refs.length; i++) {
    var pullRequest = '<div>'
    if (refs[i].getElementsByClassName('discussion-item-ref-title').length !== 0) {
      pullRequest += refs[i].getElementsByClassName('discussion-item-ref-title')[0].outerHTML
    }
    if (refs[i].getElementsByClassName('state').length !== 0) {
      pullRequest += refs[i].getElementsByClassName('state')[0].outerHTML
    }
    pullRequest += '</div>'
    pullRequests.push(pullRequest);
  }

  return pullRequests;
}

function buildDiv(pullRequests) {
  var myDiv = '<div>'
  for (var i = 0; i < pullRequests.length; i++){
    myDiv += pullRequests[i];
  }
  myDiv += '</div>';

  return myDiv;
}