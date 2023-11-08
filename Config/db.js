const {MongoClient}=require('mongodb')
const url ='mongodb://127.0.0.1:27017'

const MongoServer= new MongoClient(url)

const connection=()=>{
    try {
        MongoServer.connect()
        console.log("DataBase Connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

const database = MongoServer.db("Human_Resource")

module.exports={connection,database}

