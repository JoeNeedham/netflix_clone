export default function selectionFilter({ series, films }) {
    return {
        series: [
            { 
                title: 'Documentaries',
                data: series.filter((item) => item.genre === 'documentaries'),
            },
            {
                title: 'Comedies',
                data: series.filter((item) => item.genre === 'comedies'),
            },
            {
                title: 'Children',
                data: series.filter((item) => item.genre === 'children'),
            },
            {
                title: 'Crime',
                data: series.filter((item) => item.genre === 'crime'),
            },
            {
                title: 'Feel Good',
                data: series.filter((item) => item.genre === 'feel-good'),
            },
        ],
        files: [
            {
                title: 'Drama',
                data: films.filter((item) => item.genre === 'drama'),
            },
            {
                title: 'Thriller',
                data: series.filter((item) => item.genre === 'children'),
            },
            {
                title: 'Children',
                data: series.filter((item) => item.genre === 'children'),
            },
            {
                title: 'Suspense',
                data: series.filter((item) => item.genre === 'suspense'),
            },
            {
                title: 'Romance',
                data: series.filter((item) => item.genre === 'romance'),
            },
        ]
    }
}