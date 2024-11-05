import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const relationalQueries = async()=>{
    
    // fluent api
    const result = await prisma.user.findUnique({
        where:{
            id:1
        },
    }).post();
    //     include: {
    //         post: true
    //     }
    // })

    // console.log(result);


    const publishedPostedUsers = await prisma.user.findMany({
        include:{
            post:{
                where:{
                    published:true
                }
            }
        }
    })

    console.dir(publishedPostedUsers,{depth:Infinity})
    


}


relationalQueries()