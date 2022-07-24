import News from './news/news';
import Sources from './sources/sources';
import { Article, Source } from '../types/types';
import { drawNewsFunction, drawSourcesFunction } from '../interfaces/interfaces';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews: drawNewsFunction = (data) => {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    };

    drawSources: drawSourcesFunction = (data) => {
        const values: Array<Source> | [] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    };
}

export default AppView;
