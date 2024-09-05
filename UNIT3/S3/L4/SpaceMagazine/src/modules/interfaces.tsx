export interface Article {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
    launches: Launch[];
    events: Event[];
}

export interface Event {
    // Puoi aggiungere proprietà specifiche se ci sono dati sugli eventi
}

export interface Launch {
    launch_id: string;
    provider: string;
}

export interface ApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Article[];
}