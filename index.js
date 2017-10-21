function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(nested, target) {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node =  document.getElementById('grand-node');
  let child = node.children[0];

  while (child) {
    node = child;
    child = node.children[0];
  }

  return node;
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }
}
