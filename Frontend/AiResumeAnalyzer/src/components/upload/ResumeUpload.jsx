import UploadCard from "./UploadCard";

const JobDescriptionUpload = ({ file, setFile }) => {

    return (

        <UploadCard

            title="📃Resume Description"

            description="Upload Your Resume"

            file={file}

            setFile={setFile}

        />

    );

};

export default JobDescriptionUpload;