import Head from "next/head";
import PageTitle from "@/components/PageTitle";
import Charge from "@/components/Charge";
import { useState, useRef } from "react";
import Link from "next/link";
import Retour from "@/components/Retour";

function Recherche() {
  // ----------------partie des states--------------
  const [videos, setVideos] = useState([]);
  const [Loader, setLoader] = useState(false);
  // -------------------fin des states-----------------

  let theme = useRef();

  const FormSub = (e) => {
    e.preventDefault();
    setVideos([]);
    setLoader(true);

    const query = theme.current.value;

    // Remplacez `YOUR_API_KEY` par votre clé d'API YouTube Data v3.
    const API_KEY = "AIzaSyBXWW9PJqwhNCoJUvFwBOfv95rtFV18yPQ";
    const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&type=video&maxResults=10&key=${API_KEY}`;

    fetch(YOUTUBE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items || []);
        setLoader(false);
      })
      .catch(() => {
        setTimeout(() => {
          alert("Il y a un problème de connexion. Veuillez réessayer.");
          setLoader(false);
        }, 3000);
      });
  };

  return (
    <>
      <Head>
        <title>Recherche</title>
        <meta name="description" content="Recherche de vidéos de cours" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="wrapper">
        <div id="content">
          <Retour lien="/" />
          <div className="space-sticky" />

          <section className="un-page-components">
            <PageTitle
              title="Recherche"
              description="Recherche de vidéos YouTube"
            />
            <div className="content-comp p-0">
              <div className="padding-20 form-edit-profile bg-white">
                <section className="main-search-header">
                  <div className="content-search">
                    <form className="form-group with_icon" onSubmit={FormSub}>
                      <div className="input_group">
                        <input
                          type="text"
                          className="form-control rounded-pill"
                          placeholder="Entrez des mots-clés pour rechercher"
                          ref={theme}
                        />
                        <div className="icon">
                          <i className="ri-search-2-line"></i>
                        </div>
                      </div>
                      <br />
                      {Loader ? (
                        <button type="submit" className="btn btn-primary" disabled>
                          <Charge />
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-primary">
                          Recherche
                        </button>
                      )}
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </section>

          <section className="un-page-components">
            <div className="un-title-default">
              <div className="text">
                <h2>Résultats :</h2>
              </div>
            </div>
            <div className="content-comp p-0">
              <div className="bg-white padding-20">
                {videos.length > 0 ? (
                  <div className="row">
                    {videos.map((video) => (
                      <div className="col-md-6 mb-4" key={video.id.videoId}>
                        <div className="card shadow-sm">
                          <img
                            src={video.snippet.thumbnails.medium.url}
                            alt={video.snippet.title}
                            className="card-img-top"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{video.snippet.title}</h5>
                            <p className="card-text text-truncate">
                              {video.snippet.description}
                            </p>
                            <Link
                              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                              target="_blank"
                              className="btn btn-primary"
                            >
                              Voir la vidéo
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  !Loader && <p>Aucun résultat trouvé.</p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Recherche;
