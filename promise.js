const p = new Promise((resolve, reject) => {
  //kick off some async work
  setTimeout(() => {
    // resolve(1);
    reject(new Error("Info_About_Error"));
  }, 2000);
});
p.then((resulting) => console.log("Result Display", resulting.meesage)).catch(
  (err) => console.log("Result Display", err.message)
);
