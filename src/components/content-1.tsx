import Image from 'next/image'

export default function ContentSection() {
    return (
        <section id="solucao" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">O ecossistema reúne nossas soluções digitais.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/payments.png" className="hidden rounded-[15px] dark:block" alt="ilustração de pagamentos (escuro)" width={1207} height={929} />
                            <Image src="/payments-light.png" className="rounded-[15px] shadow dark:hidden" alt="ilustração de pagamentos (claro)" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Meu trabalho vai além do código: entrego soluções que conectam <span className="text-accent-foreground font-bold">um ecossistema completo</span> — de produtos a APIs e plataformas — para impulsionar negócios.
                        </p>
                        <p className="text-muted-foreground">Do design à implementação, combino desempenho, usabilidade e estética para criar experiências digitais modernas.</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>Usar TailsUI tem sido como destravar um superpoder de design. É a fusão perfeita entre simplicidade e versatilidade, permitindo criar UIs lindas e fáceis de usar.</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">João Silva, CEO</cite>
                                    <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Logo da Nvidia" height="20" width="auto" />
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
