# Leo Car — Automotive Experience

Prévia comercial em Next.js, TypeScript, Tailwind CSS e Motion. Utiliza exclusivamente as seis fotografias fornecidas da oficina. O nome da empresa é apresentado em texto; o logotipo original não foi fornecido.

## Desenvolvimento

Node.js 24 e npm. Na raiz do projeto:

```sh
npm ci
npm run dev
```

## Validação e produção

```sh
npm run build
npm run typecheck
npm start
```

## Contatos

Copie `.env.example` para `.env.local` e preencha somente dados confirmados. `NEXT_PUBLIC_WHATSAPP_NUMBER` deve conter país 55, DDD e número, apenas dígitos. `NEXT_PUBLIC_INSTAGRAM_URL` deve ser a URL HTTPS do perfil oficial. Reinicie o servidor de desenvolvimento ou refaça o build após configurar.

Sem número confirmado, o formulário permite preparar e copiar a mensagem, deixa explícito que nada foi enviado e não cria links fictícios. Nenhum dado do formulário é armazenado pelo site. O agendamento depende da confirmação da equipe no WhatsApp.

O endereço é o informado no briefing. O link de mapa faz uma busca pelo texto; localização, contato, marcas atendidas e serviços precisam de revisão do proprietário antes da publicação comercial.

## Experiência

Introdução de 2,4 segundos com opção de pular, suporte a movimento reduzido, menu mobile, filtros de serviços, seleção do serviço no formulário e galeria com diálogo nativo, teclado e gestos de toque. Fontes locais Oswald e Barlow. As fotografias originais são preservadas; tratamento visual usa CSS e otimização usa Next Image.
