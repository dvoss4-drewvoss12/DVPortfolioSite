export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-nord-border bg-nord-dark py-8 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-nord-ice">
        <p>&copy; {currentYear} Drew Voss.</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/dvoss4-drewvoss12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-nord-frost transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dvoss4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-nord-frost transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
