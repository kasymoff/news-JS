import { NewsData, NewsSources } from '../types/types';

export interface drawNewsFunction {
    (data?: NewsData): void;
}

export interface drawSourcesFunction {
    (data?: NewsSources): void;
}
