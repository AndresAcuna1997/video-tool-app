export const VideoList = () => {
  return (
    <main className="bg-white w-full rounded-lg px-10 py-8">

      <div className="flex justify-between">
        <div className="flex gap-4">

          <button>
            <i className="fa-solid fa-book mr-2"></i>
            Biblioteca
          </button>

          <button>
            <i className="fa-solid fa-trash-can mr-2"></i>
            Papelera
          </button>
        </div>

        <div className="flex gap-4">
          <button>
            <i className="fa-regular fa-folder mr-2"></i>
            Nueva Carpeta
          </button>

          <button>
            <i className="fa-regular fa-circle-play mr-2"></i>
            Nuevo Video
          </button>
        </div>
      </div>

    </main>
  );
};