import type { Metadata } from 'next';
import './globals.css';
import {site} from '@/data/site';
export const metadata:Metadata={title:`${site.name} | AI Automation Engineer`,description:'AI workflow automation, RAG assistants, intelligent support systems and CRM integrations. Explore projects by Naveed Ahmed.',openGraph:{title:`${site.name} — AI Automation Engineer`,description:'Practical AI systems for real business problems.',type:'website'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning={true}><body className="antialiased" suppressHydrationWarning={true}>{children}</body></html>}
