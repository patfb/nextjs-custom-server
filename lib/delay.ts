const delay = (ms = 1_000) =>
  new Promise((resolve) => {
    console.log("delaying for", ms);
    return setTimeout(resolve, ms);
  });

export { delay };
