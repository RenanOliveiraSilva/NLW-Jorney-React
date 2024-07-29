import { Link2, Plus } from 'lucide-react'
import React from 'react'
import Button from '../../components/button'

export default function ImportantLinks() {
  return (
    <div className="space-y-6">
        <h2 className="font-semibold text-xl">Links Importantes</h2>

        <div className="space-y-5 ">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">Reserva do Airbnb</span>
                    <a href="#" className="block text-xs font-small text-zinc-400 truncate">https://www.airbnb.com.br/rooms/104700011fsfffwfwg</a>
                </div>
                <Link2 className="size-5 text-zinc-400 shrink-0"/>
            </div>

        </div>


        <Button size='full' variant='secondary'>
            <Plus className="size-5" />
            Cadastrar novo Link
        </Button>

        
    </div>
  )
}
