import NormalCard from "@/components/Cards";
import Citacao from "@/components/Citacao";
import HeaderFlex from "@/components/Header";
import HeroFlex from "@/components/HeroFlex";
import PaymentCard from "@/components/PaymentCard";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { UserGroupIcon, TrophyIcon, MusicalNoteIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const text = [
    { title: 'EXECUÇÃO DO PLANO REPACTUAÇÃO', text: 'Com base nas informações e documentos que você nos conceder, desenvolveremos o plano de pagamento de acordo com as suas possibilidades, sem apertos no final do mês e sem deixar de pagar o principal.' }, 
    { title: 'EXECUÇÃO DO PLANO REPACTUAÇÃO', text: 'Com base nas informações e documentos que você nos conceder, desenvolveremos o plano de pagamento de acordo com as suas possibilidades, sem apertos no final do mês e sem deixar de pagar o principal.' }, 
    { title: 'EXECUÇÃO DO PLANO REPACTUAÇÃO', text: 'Com base nas informações e documentos que você nos conceder, desenvolveremos o plano de pagamento de acordo com as suas possibilidades, sem apertos no final do mês e sem deixar de pagar o principal.' }, 
    { title: 'EXECUÇÃO DO PLANO REPACTUAÇÃO', text: 'Com base nas informações e documentos que você nos conceder, desenvolveremos o plano de pagamento de acordo com as suas possibilidades, sem apertos no final do mês e sem deixar de pagar o principal.' }, 
    { title: 'EXECUÇÃO DO PLANO REPACTUAÇÃO', text: 'Com base nas informações e documentos que você nos conceder, desenvolveremos o plano de pagamento de acordo com as suas possibilidades, sem apertos no final do mês e sem deixar de pagar o principal.' }]

  return (
    <div className="">
      <HeaderFlex />
      <main className="pt-12 lg:px-4 xl:px-0">
        <Section className="flex flex-col gap-6 sm:gap-24 pb-12">
          <div className="flex flex-col gap-4 sm:gap-12 sm:flex-row px-4 sm:px-0">
            <NormalCard
              title="Lorem ipsum"
              subtitle="Lorem ipsum dolor sit amet ut enim ad minim veniam. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              Icon={TrophyIcon}
            />
            <NormalCard
              title="Lorem ipsum"
              subtitle="Lorem ipsum dolor sit amet ut enim ad minim veniam. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              Icon={UserGroupIcon}
            />
            <NormalCard
              title="Lorem ipsum"
              subtitle="Lorem ipsum dolor sit amet ut enim ad minim veniam. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              Icon={MusicalNoteIcon}
            />
          </div>
          <HeroFlex
            title="Segunda melhor headline possível"
            imagePath="bg"
            reverse={true}
          >
            <div className="">
              <p className="text-zinc-600">Lorem ipsum dolor sit amet ut enim ad minim veniam.</p>
              <p className="text-zinc-600">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </HeroFlex>
        </Section>
        <Section classNameS="bg-zinc-100 py-12 sm:py-24" className="flex flex-col gap-4 sm:gap-24">
          <HeroFlex
            title="Terceira melhor headline possível"
            imagePath="bg"
          >
            <div className="">
              <p className="text-zinc-600">Lorem ipsum dolor sit amet ut enim ad minim veniam.</p>
              <p className="text-zinc-600">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </HeroFlex>
          <div className="px-4 sm:px-0">
            <div className="text-left sm:text-center">
              <h2 className="font-bold text-3xl">Como funciona nossa estratégia?</h2>
            </div>
            <div className="mt-8">
              <Timeline texts={text} />
            </div>
          </div>
        </Section>
        <Section className="pt-12 flex flex-col gap-12 sm:gap-12 pb-12">
          <Citacao />
          <HeroFlex
            title="Quarta melhor headline possível"
            imagePath="bg"
          >
            <div className="">
              <p className="text-zinc-600">Lorem ipsum dolor sit amet ut enim ad minim veniam.</p>
              <p className="text-zinc-600">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </HeroFlex>
          <div className="px-4 sm:px-0 w-full flex justify-center">
            <PaymentCard />
          </div>
        </Section>
      </main>
      <footer className="py-8 bg-zinc-600 text-white text-center px-4 sm:px-0">
        <p className="text-xs font-medium">TODOS OS DIREITOS RESERVADOS 2023 RAFAEL BEZERRA</p>
      </footer>
    </div>
  )
}