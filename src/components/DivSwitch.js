const DivSwitch = (pokeArr) => {
    let numArr = [];
    let num = 0;
    if (pokeArr.length === 0){
        while (numArr.length < 12){
            num = Math.floor(Math.random()*150) +1;
            if(!numArr.includes(num)){
                numArr.push(num);
            }
        }
    }else{
        pokeArr
            .sort(()=>0.5-Math.random())
            .map(randNum =>{
            numArr.push(randNum)
            })
    }

    return numArr
}

export default DivSwitch