function Header() {
    try {
        return (
            <header data-name="header" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
                <div data-name="header-content" className="container mx-auto px-4 text-center">
                    <h1 data-name="header-title" className="text-4xl font-bold mb-2">
                        Hash to Magnet Converter
                    </h1>
                    <p data-name="header-description" className="text-lg opacity-90">
                        Convert your hash to magnet link with ease
                    </p>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
