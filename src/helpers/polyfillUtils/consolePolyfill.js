if (process.env.NODE_ENV === 'production') console.log = function(){}
if (process.env.NODE_ENV != 'production'){
	var time = function(){};
	time.toString = () => (new Date).toISOString().substr(11);
	console.logTime = console.log.bind(console, `%c%s`, `color:#bbb; font-weight:light;`, time);
}else
	console.logTime = function(){}