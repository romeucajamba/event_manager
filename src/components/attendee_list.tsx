import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import { IconButton } from './icon_button';



export function AttendeeList(){
    return(
        <main className='flex flex-col gap-4'>
           <div className="flex items-center gap-3">
             <h1 className="text-2xl font-bold">Lista de participantes</h1>
             <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                <Search className='size-4 text-[#610CE1]'/>
                <input type="text" placeholder="pesquisar participante" className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" />
             </div>
           </div>

            <div className='border border-white/10 rounded-lg'>
            <table className='w-full'>
            <thead>
                <tr className='border-b border-white/10'>
                    <th style={{width: 48}} className='py-3 px-4 text-sm font-semibold text-left'>
                        <input type="checkbox" className='size-4 bg-black/20 rounded border-white/10'/>
                    </th>
                    <th className='py-3 px-4 text-sm font-semibold text-left'>Código</th>
                    <th className='py-3 px-4 text-sm font-semibold text-left'>Participantes</th>
                    <th className='py-3 px-4 text-sm font-semibold text-left'>Data de inscrição</th>
                    <th className='py-3 px-4 text-sm font-semibold text-left'>Data do ticket</th>
                    <th style={{width: 64}} className='py-3 px-4 text-sm font-semibold text-left'>
                        
                    </th>
                </tr>
            </thead>
            <tbody>
               {
                Array.from({length: 5}).map((_, index) => {
                    return(
                        <tr key={index} className='border-b border-white/10 hover:bg-white/5'>
                        <td className='py-3 px-4 text-sm font-semibold text-zinc-300'>
                                <input type="checkbox" className='size-4 bg-black/20 rounded border-white/10' />
                            </td>
                            <td className='py-3 px-4 text-sm text-zinc-300'>5357</td>
                            <td className='py-3 px-4 text-sm text-zinc-300'>
                                <div className='flex flex-col gap-1'>
                                    <span className='font-semibold text-white'>Romeu Cajamba</span>
                                    <span>romeucajamba@gmail.com</span>
                                </div>
                            </td>
                            <td className='py-3 px-4 text-sm text-zinc-300'>7 dias atrás</td>
                            <td className='py-3 px-4 text-sm text-zinc-300'>3 dias atrás</td>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>
                            <IconButton transparent>
                                <MoreHorizontal className='size-4 text-white'/>
                            </IconButton>
                            </th>
                        </tr>
                    )
                })
               
               }
            </tbody>
            <tfoot>
                <tr>
                    <td className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
                        Mostrando 10 de 228
                    </td>
                    <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                       <div className='inline-flex items-center gap-8'>
                            <span>página 1 de 23</span>

                            <div className='flex gap-1.5'>
                                <IconButton>
                                    <ChevronsLeft className='size-4 text-white'/>
                                </IconButton>
                                <IconButton>
                                    <ChevronLeft className='size-4 text-white'/>
                                </IconButton>
                                <IconButton>
                                    <ChevronRight className='size-4 text-white'/>
                                </IconButton>
                                <IconButton>
                                    <ChevronsRight className='size-4 text-white'/>
                                </IconButton>
                            </div>
                       </div>
                    </td>
                </tr>
            </tfoot>
           </table>
            </div>
           
        </main>
    )
}