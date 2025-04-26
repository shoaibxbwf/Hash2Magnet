function Converter() {
    try {
        const [hash, setHash] = React.useState('');
        const [magnetLink, setMagnetLink] = React.useState('');
        const [copied, setCopied] = React.useState(false);
        const [outputCopied, setOutputCopied] = React.useState(false);
        const [error, setError] = React.useState('');

        const handleHashChange = (e) => {
            setHash(e.target.value);
            setError('');
        };

        const handleClear = () => {
            setHash('');
            setMagnetLink('');
            setError('');
        };

        const handleConvert = () => {
            try {
                if (!hash.trim()) {
                    setError('Please enter a hash');
                    return;
                }
                const magnet = convertHashToMagnet(hash.trim());
                setMagnetLink(magnet);
                setError('');
            } catch (err) {
                setError('Invalid hash format');
                setMagnetLink('');
            }
        };

        const handleCopy = () => {
            if (magnetLink) {
                navigator.clipboard.writeText(magnetLink);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        };

        const handleOutputCopy = () => {
            if (hash) {
                navigator.clipboard.writeText(hash);
                setOutputCopied(true);
                setTimeout(() => setOutputCopied(false), 2000);
            }
        };

        const handleDownload = () => {
            if (magnetLink) {
                const link = document.createElement('a');
                const content = `d10:magnet-uri${magnetLink.length}:${magnetLink}e`;
                const blob = new Blob([content], { type: 'application/x-bittorrent' });
                const url = URL.createObjectURL(blob);
                link.href = url;
                link.download = `${hash}.torrent`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            }
        };

        return (
            <div data-name="converter-section" className="min-h-[calc(100vh-300px)] bg-gray-50 py-12">
                <div data-name="converter-container" className="container mx-auto px-4">
                    <div data-name="converter-box" className="converter-container max-w-2xl mx-auto rounded-lg p-6">
                        <div data-name="input-group" className="mb-6">
                            <label data-name="hash-label" htmlFor="hash" className="block text-gray-700 text-sm font-medium mb-2">
                                Enter Hash
                            </label>
                            <div data-name="hash-input-container" className="relative">
                                <input
                                    data-name="hash-input"
                                    type="text"
                                    id="hash"
                                    className="input-field w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none pr-10"
                                    placeholder="Enter your hash here"
                                    value={hash}
                                    onChange={handleHashChange}
                                />
                                {hash && (
                                    <button
                                        data-name="copy-output-button"
                                        onClick={handleOutputCopy}
                                        className="copy-button absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700"
                                        title="Copy hash"
                                    >
                                        <i className={`fas ${outputCopied ? 'fa-check' : 'fa-copy'}`}></i>
                                    </button>
                                )}
                            </div>
                            {error && (
                                <p data-name="error-message" className="text-red-500 text-sm mt-2">
                                    {error}
                                </p>
                            )}
                        </div>

                        <div data-name="button-group" className="flex gap-4 mb-6">
                            <button
                                data-name="convert-button"
                                onClick={handleConvert}
                                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Convert to Magnet Link
                            </button>
                            <button
                                data-name="clear-button"
                                onClick={handleClear}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
                                title="Clear input"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        {magnetLink && (
                            <div data-name="result-section" className="mt-6">
                                <label data-name="result-label" className="block text-gray-700 text-sm font-medium mb-2">
                                    Magnet Link
                                </label>
                                <div data-name="result-container" className="space-y-4">
                                    <div className="relative">
                                        <input
                                            data-name="magnet-output"
                                            type="text"
                                            readOnly
                                            value={magnetLink}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50"
                                        />
                                        <button
                                            data-name="copy-button"
                                            onClick={handleCopy}
                                            className="copy-button absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700"
                                            title="Copy magnet link"
                                        >
                                            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                                        </button>
                                    </div>
                                    <button
                                        data-name="download-button"
                                        onClick={handleDownload}
                                        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
                                    >
                                        <i className="fas fa-download"></i>
                                        Download Torrent File
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Converter component error:', error);
        reportError(error);
        return null;
    }
}
