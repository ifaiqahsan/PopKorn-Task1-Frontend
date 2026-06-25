import { useState, useMemo } from 'react'
import { movies, genres, languages } from '../data/mockData'
import MovieCard from '../components/MovieCard'
import FilterBar from '../components/FilterBar'
import './pages.css'

function Movies() {
    const [selectedGenre, setSelectedGenre] = useState('All')
    const [selectedLanguage, setSelectedLanguage] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    const filtered = useMemo(() => {
        return movies.filter(movie => {
            const matchGenre = selectedGenre === 'All' || movie.genre === selectedGenre
            const matchLang = selectedLanguage === 'All' || movie.language === selectedLanguage
            const matchSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            return matchGenre && matchLang && matchSearch
        })
    }, [selectedGenre, selectedLanguage, searchQuery])

    return (
        <div className="page movies-page">
            <div className="page-header container">
                <h1 className="page-title">All Movies</h1>
                <p className="page-subtitle">
                    {filtered.length} movie{filtered.length !== 1 ? 's' : ''} available
                </p>
            </div>

            <div className="container">
                <div className="movies-page__search">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search movies..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>

                <FilterBar
                    selectedGenre={selectedGenre}
                    selectedLanguage={selectedLanguage}
                    onGenreChange={setSelectedGenre}
                    onLanguageChange={setSelectedLanguage}
                    genres={genres}
                    languages={languages}
                />

                {filtered.length > 0 ? (
                    <div className="movies-grid">
                        {filtered.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <p className="empty-state__icon">🎬</p>
                        <p className="empty-state__text">No movies match your filters.</p>
                        <button
                            className="btn-outline"
                            onClick={() => {
                                setSelectedGenre('All')
                                setSelectedLanguage('All')
                                setSearchQuery('')
                            }}
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Movies