import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import { IconButton } from './icon_button';
import { Table } from './table';
import { Theader } from './theader';
import { TdCell } from './tdCell';
import { TableRow } from './tableRow';
import { attendees} from '../data/attendeeList';
import { pt} from 'date-fns/locale';
import { formatRelative } from 'date-fns';
import { ChangeEvent, useState } from 'react';


export function AttendeeList(){
    const [search, setsearch] = useState('')
    const [page, setPage] = useState(0)
    const totalPages = Math.ceil(attendees.length / 10)

    function onSearchInput(event: ChangeEvent<HTMLInputElement>){
        setsearch(event.target.value)
    }

    function goToFirstPage(){
        setPage(1)
    }

    function goToNext(){
        setPage(page + 1)
    }

    function goToPrevius(){
        setPage(page - 1)
    }

    function goToLastPage(){
        setPage(totalPages)
    }

    return(
        <main className='flex flex-col gap-4'>
           <div className="flex items-center gap-3">
             <h1 className="text-2xl font-bold">Lista de participantes</h1>
             <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                <Search className='size-4 text-[#610CE1]'/>
                <input onChange={onSearchInput} type="text" placeholder="pesquisar participante" className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" />
             </div>
                {search}
           </div>

        <Table>
            <thead>
                <TableRow >
                    <Theader style={{width: 48}}>
                        <input type="checkbox" className='size-4 bg-black/20 rounded border-white/10'/>
                    </Theader>
                    <Theader>Código</Theader>
                    <Theader>Participantes</Theader>
                    <Theader>Data de inscrição</Theader>
                    <Theader>Data do ticket</Theader>
                    <Theader style={{width: 64}} >
                        
                    </Theader>
                </TableRow>
            </thead>
            <tbody>
               {
                attendees.slice(page, 10).map(( attendee ) => {
                    return(
                        <tr key={attendee.id} className='border-b border-white/10 hover:bg-white/5'>
                        <TdCell className='py-3 px-4 text-sm font-semibold text-zinc-300'>
                                <input type="checkbox" className='size-4 bg-black/20 rounded border-white/10' />
                            </TdCell>
                            <TdCell>{attendee.id}</TdCell>
                            <TdCell>
                                <div className='flex flex-col gap-1'>
                                    <span className='font-semibold text-white'>{attendee.name}</span>
                                    <span>{attendee.email}</span>
                                </div>
                            </TdCell>
                            <TdCell>{formatRelative(attendee.createdAt, new Date(), {locale:pt })}</TdCell>
                            <TdCell>{formatRelative(attendee.checkedInAt, new Date(), {locale:pt })}</TdCell>
                            <TdCell>
                            <IconButton transparent>
                                <MoreHorizontal className='size-4 text-white'/>
                            </IconButton>
                            </TdCell>
                        </tr>
                    )
                })
               
               }
            </tbody>
            <tfoot>
                <tr>
                    <TdCell className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
                        Mostrando 10 de {attendees.length}
                    </TdCell>
                    <TdCell className='text-right' colSpan={3}>
                       <div className='inline-flex items-center gap-8'>
                            <span>página {page} de {totalPages}</span>

                            <div className='flex gap-1.5'>
                                <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                    <ChevronsLeft className='size-4 text-white'/>
                                </IconButton>
                                <IconButton onClick={goToPrevius} disabled={page === 1}>
                                    <ChevronLeft className='size-4 text-white'/>
                                </IconButton>
                                <IconButton onClick={goToNext} disabled={page === totalPages}>
                                    <ChevronRight className='size-4 text-white'/>
                                </IconButton>
                                <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                                    <ChevronsRight className='size-4 text-white'/>
                                </IconButton>
                            </div>
                       </div>
                    </TdCell>
                </tr>
            </tfoot>
        </Table>
           
        </main>
    )
}