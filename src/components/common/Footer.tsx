export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-base-100 border-t border-base-200">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <p className="text-center text-base-500 text-sm">
          &copy; {currentYear} Kukurio Apps. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
