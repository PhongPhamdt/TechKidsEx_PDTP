const muaRau = (tien) => {
	return new Promise((resolve, reject) => {
		if(tien > 10000) resolve("OKAY");
		else reject("Deo");
	});
};

const asyncMuaRau = async () => {
	try{
		const message1 = await muaRau(9000);
		console.log(message1);
		const message2 = await muaRau(10000);
		console.log(message2);
	}catch(err){
		console.log(err);
	}
};

asyncMuaRau();
