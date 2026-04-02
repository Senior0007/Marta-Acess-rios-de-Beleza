import React from 'react';

export const Entrega = () => {
  return (
    <div className="bg-surface-container-lowest min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-headline font-bold text-on-surface mb-4">Informações de Entrega</h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Tudo o que precisa saber sobre como os seus acessórios chegam até si.
          </p>
        </div>

        {/* Content */}
        <div className="bg-surface rounded-3xl shadow-sm border border-surface-variant p-8 md:p-12 mb-12">
          
          <div className="prose prose-lg max-w-none text-on-surface-variant">
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6 flex items-center">
              <span className="material-symbols-outlined text-primary mr-3 text-3xl">local_shipping</span>
              Zonas de Entrega
            </h2>
            <p className="mb-8">
              Atualmente, realizamos entregas em toda a província de Luanda. Para outras províncias, por favor entre em contacto connosco através do WhatsApp para analisarmos a possibilidade e os custos de envio.
            </p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6 flex items-center">
              <span className="material-symbols-outlined text-primary mr-3 text-3xl">schedule</span>
              Prazos de Entrega
            </h2>
            <ul className="space-y-4 mb-8 list-none pl-0">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-2 mt-1">check_circle</span>
                <div>
                  <strong className="text-on-surface block">Luanda (Centro):</strong>
                  Entregas em até 24 horas úteis após a confirmação do pagamento.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-2 mt-1">check_circle</span>
                <div>
                  <strong className="text-on-surface block">Luanda (Periferia):</strong>
                  Entregas entre 24 a 48 horas úteis após a confirmação do pagamento.
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6 flex items-center">
              <span className="material-symbols-outlined text-primary mr-3 text-3xl">payments</span>
              Custos de Entrega
            </h2>
            <p className="mb-8">
              A taxa de entrega varia consoante a zona de Luanda. O valor exato será calculado e informado durante o processo de encomenda via WhatsApp, antes da finalização da compra.
            </p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6 flex items-center">
              <span className="material-symbols-outlined text-primary mr-3 text-3xl">info</span>
              Informações Importantes
            </h2>
            <ul className="space-y-4 mb-8 list-none pl-0">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-2 mt-1">info</span>
                As entregas são realizadas de Segunda a Sábado, das 09h00 às 18h00.
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-2 mt-1">info</span>
                É necessário que alguém esteja presente no endereço indicado para receber a encomenda.
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-2 mt-1">info</span>
                Em caso de ausência, tentaremos contactar o cliente. Se não for possível a entrega, a encomenda retornará e será cobrada uma nova taxa para reenvio.
              </li>
            </ul>
          </div>
          
        </div>

        {/* CTA */}
        <div className="text-center bg-primary-container rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-headline font-bold text-on-primary-container mb-4">Ainda tem dúvidas?</h3>
          <p className="text-on-primary-container/80 mb-8 max-w-xl mx-auto">
            A nossa equipa de suporte está pronta para ajudar com qualquer questão sobre entregas ou produtos.
          </p>
          <a 
            href="https://wa.me/244938692999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined mr-2">chat</span>
            Falar no WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
};
