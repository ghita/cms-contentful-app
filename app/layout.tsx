import Link from "next/link"
import "@/app/globals.css"
import authorImg from "@/public/author.jpeg"
import Image from "next/image"


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
        <Image src={authorImg} width={80} alt="Author" className="mx-auto rounded-full"/>
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


  return (
    <html lang="en">
      <body>
        <div className="mx-auto border-blue-500 max-w-2xl">
          {header}
          {children}
        </div>
      </body>
    </html>
  )
}
