function logItems(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

// logItems(10);

function logItems2(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }

  for (let j = 0; j <= n; j++) {
    console.log(j);
  }
}

// logItems2(3);

function logItems3(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
  for (let k = 0; k <= n; k++) {
    console.log(k);
  }
}

logItems3(10);
