const users = [{
	no:1,
	name: '마이콜',
	email: 'michol@gmail.com'
},{
	no:2,
	name: '둘리',
	email: 'dooly@gmail.com'
}];

function print({no,name,email}){
	console.log(`${no}:${name}:${email}`);
}

for(let user of users){
	print(user);
}