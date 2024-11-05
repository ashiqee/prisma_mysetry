import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


const filtering =async()=>{
    

    const result=await prisma.post.findMany({
        where:{
            AND:[
                {
                    title:{contains:"title"},
                    published:true
                }
            ]
        }

    })

    console.log(result);
    


}


filtering()