import React from 'react';

function SeriesForm({
  title, setTitle,
  description, setDescription,
  category, setCategory,
  creator, setCreator,
  cast, setCast,
  seasons, setSeasons,
  rating, setRating,
  thumbnail, setThumbnail,
  videoLink, setVideoLink,
  bannerLink, setBanner,
  handleSubmit, submitLabel
}) {
  const handleAddSeason = () => {
    setSeasons([...seasons, { number: seasons.length + 1, episodes: [] }]);
  };

  const handleAddEpisode = (seasonIndex) => {
    const newSeasons = seasons.slice();
    newSeasons[seasonIndex].episodes.push({ title: '', link: '' });
    setSeasons(newSeasons);
  };

  const handleEpisodeChange = (seasonIndex, episodeIndex, field, value) => {
    const newSeasons = seasons.slice();
    newSeasons[seasonIndex].episodes[episodeIndex][field] = value;
    setSeasons(newSeasons);
  };

  const handleRemoveEpisode = (seasonIndex, episodeIndex) => {
    const newSeasons = seasons.slice();
    newSeasons[seasonIndex].episodes.splice(episodeIndex, 1);
    setSeasons(newSeasons);
  };

  return (
    <form onSubmit={handleSubmit} className='serie'>
      <div className="inputContainer">
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=''
        />
        <label>Title</label>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder=''
        />
        <label>Description</label>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder=''
        />
        <label>Category</label>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          required
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
          placeholder=''
        />
        <label>Creator</label>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          required
          value={cast.join(', ')}
          onChange={(e) => setCast(e.target.value.split(', '))}
          placeholder=''
        />
        <label>Cast (comma separated)</label>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder=''
        />
        <label>Rating</label>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          required
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          placeholder=''
        />
        <label>Thumbnail URL</label>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          required
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          placeholder=''
        />
        <label>Video Link</label>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          required
          value={bannerLink}
          onChange={(e) => setBanner(e.target.value)}
          placeholder=''
        />
        <label>Banner URL</label>
      </div>
      <div> 
        <h3>Seasons</h3>
        {seasons.map((season, index) => (
          <div key={index}>
            <h4>Season {season.number}</h4>
            {season.episodes.map((episode, episodeIndex) => (
              <div className='containerRelative' key={episodeIndex}>
                <div className="inputContainer">
                  <input
                    type="text"
                    placeholder=''
                    value={episode.title}
                    onChange={(e) => handleEpisodeChange(index, episodeIndex, 'title', e.target.value)}
                  />
                  <label>{`Episode ${episodeIndex + 1} Title`}</label>
                </div>
                <div className="inputContainer">
                  <input
                    type="text"
                    placeholder=''
                    value={episode.link}
                    onChange={(e) => handleEpisodeChange(index, episodeIndex, 'link', e.target.value)}
                  />
                  <label>{`Episode ${episodeIndex + 1} Link`}</label>
                </div>
                <button type="button" className='removeEp' onClick={() => handleRemoveEpisode(index, episodeIndex)}>X</button>
              </div>
            ))}
            <button type="button" onClick={() => handleAddEpisode(index)}>Add Episode</button>
          </div>
        ))}
        <button type="button" onClick={handleAddSeason}>Add Season</button>
      </div>
      <button type="submit">{submitLabel}</button>
    </form>
  );
}

export default SeriesForm;
