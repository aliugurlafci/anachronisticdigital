import React from 'react';
import { NewsItem, Navbars, Footer } from '../components/index';

export function News({ menu, config, footer }) {
    return (
        <div className="news-section">
            <Navbars config={menu} />
            <NewsItem config={config.news} />
            <Footer config={footer} />
        </div>
    );
}