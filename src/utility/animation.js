export const slideUp =(delay)=>{
    return{
        initial:{
            y:100,
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.5,
                delay
            }
        }
    }
}

export const slideLeft =(delay)=>{
    return{
        initial:{
            x:100,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:0.5,
                delay
            }
        }
    }
}

export const slideRight =(delay)=>{
    return{
        initial:{
            x:-100,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:0.5,
                delay
            }
        }
    }
}