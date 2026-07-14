import api from "./api";

export const analyzeResume = async (resumeFile) => {

    const formData = new FormData();

    formData.append("file", resumeFile);

    const response = await api.post("/analyze", formData);

    return response.data;
};

export const matchResumeWithJDText = async (resumeFile, jdText) => {

    const formData = new FormData();

    formData.append("file", resumeFile);
    formData.append("jd", jdText);

    const response = await api.post("/match", formData);

    return response.data;
};

export const matchResumeWithJDFile = async (resumeFile, jdFile) => {

    const formData = new FormData();

    formData.append("resume", resumeFile);
    formData.append("jd", jdFile);

    const response = await api.post("/match-file", formData);

    return response.data;
};