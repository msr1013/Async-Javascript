console.log("Before");
getUser(1, (user) => {
  console.log("user:", user);
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("repos", repos);
    getCommits("@#$", (commits) => {
      console.log("commits", commits);
    });
  });
});
console.log("After");

function getCommits(add, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database");
    callback({ add: add, returnCommit: "returnedcommit" });
  }, 2000);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database");
    callback({ id: id, gitHubUsername: "manish" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("reading from repository");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
