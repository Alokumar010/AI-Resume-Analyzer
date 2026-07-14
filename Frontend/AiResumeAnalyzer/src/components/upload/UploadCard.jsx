const UploadCard = ({
    title,
    description,
    file,
    setFile
}) => {

    const handleChange = (event) => {

        const selectedFile = event.target.files[0];

        if (selectedFile) {

            setFile(selectedFile);

        }

    };

    const removeFile = () => {

        setFile(null);

    };

    return (

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

            <h2 className="text-xl font-semibold">

                {title}

            </h2>

            <p className="mt-2 text-sm text-slate-400">

                {description}

            </p>

            <input

                className="mt-6 w-full rounded-lg border border-slate-700 p-3"

                type="file"

                accept=".pdf"

                onChange={handleChange}

            />

            {

                file && (

                    <div className="mt-5 rounded-lg bg-slate-800 p-3">

                        <p>

                            📄 {file.name}

                        </p>

                        <button

                            onClick={removeFile}

                            className="mt-2 text-sm text-red-400"

                        >

                            Remove

                        </button>

                    </div>

                )

            }

        </div>

    );

};

export default UploadCard;