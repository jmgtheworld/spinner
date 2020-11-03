const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', 
'\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '  ];

for (let element in spinner) {
  setTimeout(() => {
    process.stdout.write(spinner[element]);
  }, 100 + (element * 200) );
}
