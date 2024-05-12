import { Header} from './components/header';
import { AttendeeList } from './components/attendee_list';

export function App() {

  return (
    <div className='max-w-[1216px] mx-auto py-5 text-zinc-50 antialiased flex flex-col gap-5'>
      <Header />
      <AttendeeList />
    </div>
  )
}
