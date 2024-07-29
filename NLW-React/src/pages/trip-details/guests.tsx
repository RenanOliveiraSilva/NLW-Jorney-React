import { CircleDashed, UserCog } from 'lucide-react'
import { useEffect, useState } from 'react'
import Button from '../../components/button'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { api } from '../../lib/axios'

interface Participants {
    id: string
    name?: 
}

export default function Guests() {

    const { tripId } = useParams()
    const [trip, setTrip] = useState<Trip | undefined>()
    
    const displayedDate = trip
    ? format(trip.starts_at, "d' de 'LLL").concat(' até ').concat(format(trip.ends_at, "d' de 'LLL"))
    : null

    useEffect(() => {
        api.get(`/trips/${tripId}`).then(response => console.log(response.data))
    }, [tripId])
    
  return (
    <div className="space-y-6">
        <h2 className="font-semibold text-xl">Convidados</h2>

        <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">Jessica White</span>
                    <span className="block text-sm  text-zinc-400 truncate">jessica.white44@yahoo.com</span>
                </div>
                <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
                    <span className="block text-sm  text-zinc-400 truncate">lacy.stiedemann@gmail.com</span>
                </div>
                <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
            </div>

        </div>

        <Button size='full' variant='secondary'>
            <UserCog className="size-5" />
            Gerenciar convidados
        </Button>

    </div>
  )
}
