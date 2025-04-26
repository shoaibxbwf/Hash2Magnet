function convertHashToMagnet(hash) {
    try {
        // Validate hash format (basic validation)
        if (!/^[a-fA-F0-9]{40}$/.test(hash)) {
            throw new Error('Invalid hash format');
        }
        
        // Create magnet URI
        return `magnet:?xt=urn:btih:${hash.toLowerCase()}`;
    } catch (error) {
        console.error('Hash conversion error:', error);
        throw error;
    }
}
