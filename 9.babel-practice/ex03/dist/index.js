const users = [{
  no: 1,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 2,
  name: '둘리',
  email: 'dooly@gmail.com'
}];
function print({
  no,
  name,
  email
}) {
  console.log(`${no}:${name}:${email}`);
}
for (var _i = 0, _users = users; _i < _users.length; _i++) {
  let user = _users[_i];
  print(user);
}
