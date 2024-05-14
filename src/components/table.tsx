import { ComponentProps } from "react";

interface Tableprops extends ComponentProps<'table'>{

}

export function Table(props: Tableprops){
    return(
        <div className='border border-white/10 rounded-lg'>
            <table className='w-full' {...props}/>
        </div>
    )
    }