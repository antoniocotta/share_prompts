import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata = {
    title: 'Promptopia',
    description: 'Descubra e compartilhe prompts para IA',
}

const RootLayout = ({children}) => {
    return (
        <html lang="pt-br">
            <body>
                <div className="Main">
                    <div className="gradient" />
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </body>    
        </html>
  )
}

export default RootLayout