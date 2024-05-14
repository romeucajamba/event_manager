import { ComponentProps } from "react";
import { twMerge} from 'tailwind-merge';


interface TdCellProps extends ComponentProps<'th'>{}


export function TdCell(props: TdCellProps){
    return(
        <td {...props} className={twMerge('py-3 px-4 text-sm text-zinc-300', props.className)} />
    )
}