

class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }
    async mostPopular() {
        const responese = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 30,
            },
        });
        return responese.data.items;
    }
    async search(query) {
        const responese = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 30,
                type: 'video',
                q: query,
            },
        });
        return responese.data.items.map(item => ({...item, id: item.id.videoId}));
    }
}

export default Youtube;