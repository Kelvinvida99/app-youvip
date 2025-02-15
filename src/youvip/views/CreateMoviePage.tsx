import { useForm } from "../../hooks/useForm";
import { useCreateMovieMutation } from "../../services/movieService";

export const CreateMoviePage = () => {
  const {
    title,
    description,
    movieUrl,
    genre,
    releaseDate,
    rating,
    runtime,
    posterUrl,
    cast,
    directors,
    writers,
    onInputChange,
    onResetForm,
  } = useForm({
    title: "",
    description: "",
    movieUrl: "",
    genre: "",
    releaseDate: "",
    rating: "",
    runtime: "",
    posterUrl: "",
    cast: "",
    directors: "",
    writers: "",
  });

  // 2. Obtener la mutación de RTK Query
  const [createMovie, { isLoading, isError }] = useCreateMovieMutation();

  // 3. Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const movieData = {
        title,
        description,
        movieUrl,
        genre: genre.split(",").map((g) => g.trim()),
        releaseDate: new Date(releaseDate).toISOString(), // Convertir a ISO string
        rating: Number(rating),
        runtime: Number(runtime),
        posterUrl: posterUrl || undefined, // Enviar undefined si está vacío
        cast: cast.split(",").map((c) => c.trim()),
        directors: directors.split(",").map((d) => d.trim()),
        writers: writers.split(",").map((w) => w.trim()),
      };

      // 4. Ejecutar la mutación
      const response = await createMovie(movieData).unwrap();

      console.log("Película creada:", response);
      onResetForm();
    } catch (err) {
      console.error("Error al crear la película:", err);
    }
  };

  return (
    <div>
      <div className="form-container">
        {isError && (
          <div className="error-message">
            Error: {"No se pudo crear la película"}
          </div>
        )}

        <form className="form-container" onSubmit={handleSubmit}>
          {/* Title */}
          <input
            className="input-login"
            type="text"
            placeholder="title"
            name="title"
            value={title}
            onChange={onInputChange}
            required
          />

          {/* Description */}
          <input
            className="input-login"
            type="text"
            placeholder="description"
            name="description"
            value={description}
            onChange={onInputChange}
            required
          />

          {/* Movie URL */}
          <input
            className="input-login"
            type="url"
            placeholder="movieUrl"
            name="movieUrl"
            value={movieUrl}
            onChange={onInputChange}
            required
          />

          {/* Genre (array) */}
          <input
            className="input-login"
            type="text"
            placeholder="genre (comma-separated)"
            name="genre"
            value={genre}
            onChange={onInputChange}
            required
          />

          {/* Release Date */}
          <input
            className="input-login"
            type="date"
            placeholder="releaseDate"
            name="releaseDate"
            value={releaseDate}
            onChange={onInputChange}
            required
          />

          {/* Rating */}
          <input
            className="input-login"
            type="number"
            placeholder="rating (0-10)"
            name="rating"
            value={rating}
            onChange={onInputChange}
            min="0"
            max="10"
            required
          />

          {/* Runtime */}
          <input
            className="input-login"
            type="number"
            placeholder="runtime (minutes)"
            name="runtime"
            value={runtime}
            onChange={onInputChange}
            min="0"
            required
          />

          {/* Poster URL (opcional) */}
          <input
            className="input-login"
            type="url"
            placeholder="posterUrl (optional)"
            name="posterUrl"
            value={posterUrl}
            onChange={onInputChange}
          />

          {/* Cast (array) */}
          <input
            className="input-login"
            type="text"
            placeholder="cast (comma-separated)"
            name="cast"
            value={cast}
            onChange={onInputChange}
            required
          />

          {/* Directors (array) */}
          <input
            className="input-login"
            type="text"
            placeholder="directors (comma-separated)"
            name="directors"
            value={directors}
            onChange={onInputChange}
            required
          />

          {/* Writers (array) */}
          <input
            className="input-login"
            type="text"
            placeholder="writers (comma-separated)"
            name="writers"
            value={writers}
            onChange={onInputChange}
            required
          />

          <div className="btn-container">
            <button
              className="btn-submit"
              type="submit"
              disabled={isLoading} // Deshabilitar durante la carga
            >
              {isLoading ? "Creando..." : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
