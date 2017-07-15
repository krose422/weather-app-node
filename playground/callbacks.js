var getUser = (id, callback) => {
  console.log('Getting user...');
  var user = {
    id: id,
    name: 'Kelley'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(22, (user) => {
  console.log(user);
});
