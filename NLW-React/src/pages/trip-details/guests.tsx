import { CheckCircle, CircleDashed, UserCog } from 'lucide-react'
import { useEffect, useState } from 'react'
import Button from '../../components/button'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { api } from '../../lib/axios'

interface Participant {
    id: string
    name: string | null
    email: string
    is_confirmed: boolean
}

export default function Guests() {

    const { tripId } = useParams()
    const [participants, setParticipants] = useState<Participant[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
    }, [tripId])
    
  return (
    <div className="space-y-6">
        <h2 className="font-semibold text-xl">Convidados</h2>
        <div className="space-y-5">
            {participants.map((participant, index) => {
                return(
                    <div key={participant.id} className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">{participant.name ? participant.name : `Convidado ${index}`}</span>
                            <span className="block text-sm  text-zinc-400 truncate">{participant.email}</span>
                        </div>
                            {participant.is_confirmed ? (
                                <CheckCircle className="size-5 text-green-400 shrink-0"/>
                            ) : (
                                <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
                            )}
                    </div>
                )
            })}

        </div>

        <Button size='full' variant='secondary'>
            <UserCog className="size-5" />
            Gerenciar convidados
        </Button>

    </div>
  )
}
