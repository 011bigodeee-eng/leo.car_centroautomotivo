import type { Metadata } from 'next';
import '@fontsource/oswald/600.css';
import '@fontsource/oswald/700.css';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/barlow/600.css';
import './globals.css';
export const metadata: Metadata = { title: 'Leo Car | Tecnologia e precisão em cada serviço', description: 'Mecânica geral, diagnóstico eletrônico e cuidado com câmbio automático em Américo Brasiliense. Conheça a Leo Car Centro Automotivo.' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
