function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-800 text-white py-6">
                <div data-name="footer-content" className="container mx-auto px-4 text-center">
                    <p data-name="footer-text" className="text-sm opacity-80">
                        Hash to Magnet Converter © {new Date().getFullYear()}
                    </p>
                    <p data-name="developer-credit" className="text-sm text-red-500 mt-1">
                        Developed by Shoaib
                    </p>
                    <div data-name="github-support" className="mt-4">
                        <a
                            href="https://github.com/shoaibxbwf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                        >
                            <i className="fab fa-github text-xl"></i>
                            <span>Support on GitHub</span>
                        </a>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
