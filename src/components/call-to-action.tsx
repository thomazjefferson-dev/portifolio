import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section id="comecar-construir" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Comece a construir</h2>
                    <p className="mt-4">Vamos transformar sua ideia em um produto digital.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link
                                href="https://wa.me/5521964361121?text=Ol%C3%A1%2C%20quero%20come%C3%A7ar%20agora."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Enviar mensagem no WhatsApp">
                                <span>Começar agora</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link
                                href="https://wa.me/5521964361121?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Agendar demonstração via WhatsApp">
                                <span>Agendar demonstração</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
