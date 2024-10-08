import { Github } from "lucide-react"

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-white">© 2024 Web3Donate. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 text-white">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="https://github.com/emredursunn/Hopechain" target="_blank">
            <Github className="h-4 w-4 inline-block mr-1" />
            GitHub
          </a>
        </nav>
      </footer>
  )
}

export default Footer