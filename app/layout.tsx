import Link from "next/link"
import "@/app/globals.css"


export const metadata = {
  title: 'Ghita\'s blog',
  description: 'Tech blog for Marinca Gheorghe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-gray-800 p-8 my-6 rounded-md">
        <img src={`/author.jpeg`} alt="logo" width={40} height={40} className="mx-auto rounded-full"/>
        <div className="flex justify-center space-x-4">
          <Link href="/">
            <h1 className="text-3xl text-blue-300 underline font-bold">Ghita's blog</h1>
          </Link>
          <Link className="text-3xl" href="/about">
            <h1 className="text-blue-300 underline">About</h1>
          </Link>
        </div>
        <p className="text-color">Welcome to my tech blog.</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
        <br />
        <h3>Developed by Ghita</h3>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <body>
        <div className="mx-auto border-blue-500 max-w-2xl">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
