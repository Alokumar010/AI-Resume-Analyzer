package com.example.resumeanalyzer.service;

import com.example.resumeanalyzer.dto.JobMatchResponse;
import com.example.resumeanalyzer.dto.ResumeAnalysisResponse;
import org.springframework.stereotype.Service;
import tools.jackson.databind.ObjectMapper;

@Service
public class JsonMapperService {

    private final ObjectMapper objectMapper = new ObjectMapper();

    public ResumeAnalysisResponse mapResume(String json)
            throws Exception {
        return objectMapper.readValue(json, ResumeAnalysisResponse.class);
    }

    public JobMatchResponse mapJob(String json) throws Exception {
        return objectMapper.readValue(json, JobMatchResponse.class);
    }
}