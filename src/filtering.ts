import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


const filtering =async()=>{
    

    const result=await prisma.post.findMany({

        // AND Filtering 

        // where:{
        //     AND:[
        //         {
        //             title:{contains:"title"},
        //             
        //         }
        // {
        //     published:true
        // }
        
        //     ]
        // }

        // OR Filtring 
        where:{
            OR:[
                {
                    title:{contains:"title"},
                
                },{
                    published:true
                }
            ]
        }

    })

    // console.log(result);

    const notFiltering= await prisma.post.findMany({
        where:{
            NOT:[
                {
                    title:{
                        contains:"title"
                    }
                }
            ]
        }
    })

    // startsWith, endswith, equals

    const startsWith = await prisma.user.findMany({
        where:{
            email:{
                // startsWith:"u",
                // endsWith:"ph.com"
                equals:"user2@ph.com"
            }
        }
    })
    

    const userNameArray = ['user1','user2','user5'];

    const userNamesByArray = await prisma.user.findMany({
        where:{
            username:{
                in:userNameArray
            }
        }
    })

    const inDepthData = await prisma.user.findMany({
        where:{
            id:1
        },
        include:{
            post:{
                include:{
                    postCategory:{
                        include:{
                            category:true
                        }
                    }
                }
            }
        }
    })


console.dir(inDepthData,{depth:Infinity});


}


filtering()