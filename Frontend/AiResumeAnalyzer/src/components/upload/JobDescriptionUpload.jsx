import UploadCard from "./UploadCard";

const JobDescriptionUpload = ({ file, setFile }) => {

    return (

        <UploadCard

            title="💼 Job Description"

            description="Upload Job Description PDF (Optional)"

            file={file}

            setFile={setFile}

        />

    );

};

export default JobDescriptionUpload;