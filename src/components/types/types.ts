export type Article = {
    author: string;
    content: string;
    description: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
};

export type NewsData = {
    status: string;
    totalResults: number;
    articles: Array<Article>;
};

export type Source = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

export type NewsSources = {
    status: string;
    sources: Array<Source>;
};

export type Endpoint = {
    endpoint: string;
    options?: object;
};

export type CallbackLoader = (() => void) | ((data: NewsSources) => void);
export type DrawNewsFunction = (data: Array<Article>) => void;
export type DrawSourcesFunction = (data: Array<Source>) => void;
