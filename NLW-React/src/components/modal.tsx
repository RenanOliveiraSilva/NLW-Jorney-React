import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const modalVariants = tv({
    base: "fixed inset-0 bg-black/60 flex items-center justify-center max-w-3xl w-full px-6 text-center space-y-10"
})

interface ModalVariants extends VariantProps<typeof modalVariants> {
    children: ReactNode
}

export default function Modal({children }: ModalVariants) {

    return(
        <div  className={modalVariants()}>
          {children}
        </div>
    )
}