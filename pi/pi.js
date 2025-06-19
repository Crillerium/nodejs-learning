console.log('Let\' go on calculating pi!');
var earn = 0;
var sign = 1;
for(num=1;num<=1000000000;num+=2){
    earn = earn + (num**-1)*sign;
    sign = sign*-1;
}
earn = earn*4;
console.log(`all done! here is the result: ${earn}`);