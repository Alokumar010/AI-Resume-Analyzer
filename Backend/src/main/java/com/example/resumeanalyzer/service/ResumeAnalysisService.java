package com.example.resumeanalyzer.service;

import com.example.resumeanalyzer.dto.JobMatchResponse;
import com.example.resumeanalyzer.dto.ResumeAnalysisResponse;
import com.example.resumeanalyzer.parser.Parser;

import com.example.resumeanalyzer.prompt.ResumePromptBuilder;
import com.example.resumeanalyzer.util.JsonSanitizer;
import com.example.resumeanalyzer.validator.FileValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Slf4j
@Service
@RequiredArgsConstructor
public class ResumeAnalysisService {

    private final Parser parser;
    private final ResumePromptBuilder resumePromptBuilder;
    private final OllamaService ollamaService;
    private final JsonSanitizer jsonSanitizer;
    private final JsonMapperService jsonMapperService;
    private final FileValidator validator;
    
    public ResumeAnalysisResponse analyze(MultipartFile file) throws Exception {

        log.info("Resume file uploaded");
        validator.validate(file);
        String resumeText = parser.extractText(file);
        String prompt = resumePromptBuilder.buildPrompt(resumeText);
        String cleanResponse = generateAiResponse(prompt);
        return jsonMapperService.mapResume(cleanResponse);
    }

    public JobMatchResponse analyzeJobMatch(MultipartFile file,String jd) throws Exception {

        log.info("Resume file and JD textuploaded");
        validator.validate(file);
        String resumeText = parser.extractText(file);
        String prompt = resumePromptBuilder.buildJobMatchPrompt(resumeText,jd);
        String cleanResponse = generateAiResponse(prompt);
        return jsonMapperService.mapJob(cleanResponse);
    }

    public JobMatchResponse analyzeJobMatch(MultipartFile resume,MultipartFile jd) throws Exception {

        log.info("Resume file and JD file uploaded");
        validator.validate(resume);
        validator.validate(jd);
        String resumeText = parser.extractText(resume);
        String jdText = parser.extractText(jd);
        String prompt = resumePromptBuilder.buildJobMatchPrompt(resumeText,jdText);
        String cleanResponse = generateAiResponse(prompt);
        return jsonMapperService.mapJob(cleanResponse);
    }

    private String generateAiResponse(String prompt){

        log.debug("Prompt sent to Gemma3:\n{}", prompt);
        String aiResponse = ollamaService.ask(prompt);
        log.info("Raw AI Response: {}", aiResponse);
        return jsonSanitizer.extractJson(aiResponse);
    }

}
