class Apifeature{

constructor(query,setquery){

this.query=query;
this.setquery=setquery


}

search(){
console.log('inside api feature')
    const keyword=this.setquery.keyword ?{
        Names:{$regex:this.setquery.keyword,
        $options:'i'}
    }:{}
this.query=this.query.find({...keyword})
return this

}


}
module.exports=Apifeature