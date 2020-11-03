const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', 
'\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '  ];

for (element in spinner) {
  let current = spinner[element];
  setTimeout(() => {
    process.stdout.write(current);
  }, 100 + (element * 200) );
}


